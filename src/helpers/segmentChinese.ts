import {
  AREAS,
  COMPOUND_SURNAMES,
  DYNASTIES,
  EMPEROR_TITLES,
  HIGHER_UNITS,
  LANDFORM_ENDINGS,
  NAMES,
  NOT_NAMES,
  PLACE_ENDINGS,
  PLACE_GENERICS,
  PROVINCES,
  RARER_SURNAMES,
  SURNAMES,
  UNITS,
} from "data/zh/zh-names";
import { getJieba, type Jieba } from "helpers/getJieba";

const FOREIGN_NAME_TAG = "nrt";
const NAME_TAGS = new Set(["nr", "nrfg"]);
const EMPEROR_TAG = "emperor";
const JOINED_TAG = "joined";

const BREAKS = /([、。｡､「」『』《》〈〉【】〔〕〜]+)/u;

const EMPEROR = new RegExp(
  `([${[...DYNASTIES].join("")}])(${[...EMPEROR_TITLES].sort((a, b) => b.length - a.length).join("|")})`,
  "g",
);

let toSimplifiedPromise: Promise<(text: string) => string> | undefined;

const getToSimplified = () => {
  toSimplifiedPromise ??= import("opencc-js/t2cn")
    .then(({ Converter }) => Converter({ from: "t", to: "cn" }))
    .catch(e => {
      toSimplifiedPromise = undefined;
      throw e;
    });
  return toSimplifiedPromise;
};

type Part = { word: string; surname?: boolean };

const splitName = (name: string): Part[] => {
  const chars = [...name];
  if (
    NOT_NAMES.has(name) ||
    EMPEROR_TITLES.has(name) ||
    PLACE_ENDINGS.has(chars[chars.length - 1])
  ) {
    return [{ word: name }];
  }
  const surname = COMPOUND_SURNAMES.has(chars.slice(0, 2).join(""))
    ? 2
    : SURNAMES.has(chars[0]) ||
        (RARER_SURNAMES.has(chars[0]) &&
          ((chars.length === 3 && !LANDFORM_ENDINGS.has(chars[2])) || NAMES.has(name)))
      ? 1
      : 0;
  return surname && chars.length > surname
    ? [
        { word: chars.slice(0, surname).join(""), surname: true },
        { word: chars.slice(surname).join("") },
      ]
    : [{ word: name }];
};

const splitCompound = (jieba: Jieba, word: string) => {
  if ([...word].length < 4) return [word];
  const parts = jieba.cut_for_search(word, true).filter(part => part !== word);
  const fewest: (string[] | undefined)[] = [];
  fewest[word.length] = [];
  for (let i = word.length - 1; i >= 0; i--) {
    for (const part of parts) {
      const rest = word.startsWith(part, i) ? fewest[i + part.length] : undefined;
      if (rest && (!fewest[i] || rest.length + 1 < fewest[i]!.length)) fewest[i] = [part, ...rest];
    }
  }
  return fewest[0] ?? [word];
};

const splitPlace = (word: string) => {
  const chars = [...word];
  const generics: string[] = [];
  let end = chars.length;
  for (let length = 5; length >= 2; length--) {
    const generic = chars.slice(end - length, end).join("");
    if (end - length >= 2 && PLACE_GENERICS.has(generic)) {
      generics.unshift(generic);
      end -= length;
      length = 6;
    }
  }
  let province = [3, 2].find(
    length => end - length >= 2 && PROVINCES.has(chars.slice(0, length).join("")),
  );
  if (province && end - province >= 3 && "省市".includes(chars[province]!)) province++;
  return [
    ...(province
      ? [chars.slice(0, province).join(""), chars.slice(province, end).join("")]
      : [chars.slice(0, end).join("")]),
    ...generics,
  ];
};

const splitTown = (text: string, tagged: { word: string; tag: string }[]) => {
  const chars = [...text];
  const unit = chars[chars.length - 1];
  const last = tagged[tagged.length - 1]!;
  const inner = chars.slice(2, -2).findIndex(char => HIGHER_UNITS.has(char)) + 3;
  if (inner > 2 && !chars.slice(inner, -1).some(char => HIGHER_UNITS.has(char))) {
    return UNITS.has(unit) && tagged.length > 1
      ? [chars.slice(0, inner).join(""), chars.slice(inner).join("")]
      : undefined;
  }
  if (
    chars.length < 4 ||
    tagged.length < 2 ||
    !UNITS.has(unit) ||
    inner > 2 ||
    AREAS.has(chars.slice(-2).join("")) ||
    PLACE_GENERICS.has(splitPlace(text).pop()!)
  ) {
    return undefined;
  }
  const parts = splitPlace(chars.slice(0, -1).join(""));
  if (
    unit === "区" &&
    ((last.tag === "n" && [...last.word].length > 1) || parts.some(part => [...part].length > 5))
  ) {
    return undefined;
  }
  parts[parts.length - 1] += unit;
  return parts;
};

const splitOther = (jieba: Jieba, word: string) => {
  const parts = splitCompound(jieba, word);
  const last = [...(parts[parts.length - 1] ?? "")];
  if (
    parts.length > 1 &&
    last.length === 2 &&
    PLACE_ENDINGS.has(last[1]) &&
    !PLACE_GENERICS.has(last.join("")) &&
    !AREAS.has(last.join(""))
  ) {
    return [...parts.slice(0, -2), parts[parts.length - 2] + parts[parts.length - 1]];
  }
  return parts;
};

const splitWord = (
  jieba: Jieba,
  { word, tag }: { word: string; tag: string },
  alone: boolean,
): Part[] => {
  if (tag === FOREIGN_NAME_TAG || tag === EMPEROR_TAG) return [{ word }];
  const length = [...word].length;
  if (tag === JOINED_TAG) {
    return LANDFORM_ENDINGS.has([...word][length - 1]) ? [{ word }] : splitName(word);
  }
  if (
    NAMES.has(word) ||
    NAME_TAGS.has(tag) ||
    (tag === "x" && (length === 3 || (length === 2 && alone)))
  ) {
    return splitName(word);
  }
  if (alone && length === 3 && tag !== "ns" && !LANDFORM_ENDINGS.has([...word][2])) {
    return splitName(word);
  }
  return (tag === "ns" && length >= 4 ? splitPlace(word) : splitOther(jieba, word)).map(word => ({
    word,
  }));
};

let namesAdded = false;

const addNames = (jieba: Jieba) => {
  if (namesAdded) return;
  namesAdded = true;
  for (const name of NAMES) jieba.add_word(name, null, "nr");
};

const tagWords = (jieba: Jieba, text: string) => {
  const tagged: { word: string; tag: string }[] = [];
  let index = 0;
  for (const match of text.matchAll(EMPEROR)) {
    if (match.index > index) tagged.push(...jieba.tag(text.slice(index, match.index), true));
    tagged.push({ word: match[1], tag: EMPEROR_TAG }, { word: match[2], tag: EMPEROR_TAG });
    index = match.index + match[0].length;
  }
  if (index < text.length) tagged.push(...jieba.tag(text.slice(index), true));
  return tagged;
};

export const loadChineseSegmenter = async () => {
  const [jieba, toSimplified] = await Promise.all([getJieba(), getToSimplified()]);
  addNames(jieba);
  return (text: string) =>
    text
      .split(BREAKS)
      .filter(Boolean)
      .flatMap(part =>
        BREAKS.test(part)
          ? [{ segment: part, isWordLike: false }]
          : segmentChinese(jieba, toSimplified, part),
      );
};

const segmentChinese = (jieba: Jieba, toSimplified: (text: string) => string, text: string) => {
  const original = [...text];
  const simplified = [...toSimplified(text)].map((char, i) => (original[i] === "乾" ? "乾" : char));
  const source = simplified.length === original.length ? simplified.join("") : text;
  let index = 0;
  let tagged = tagWords(jieba, source);
  if (
    tagged.length > 1 &&
    /^\p{Script=Han}{3}$/u.test(source) &&
    tagged.every(({ tag }) => tag !== FOREIGN_NAME_TAG && tag !== EMPEROR_TAG)
  ) {
    tagged = [{ word: source, tag: JOINED_TAG }];
  }
  const town = /^\p{Script=Han}+$/u.test(source) ? splitTown(source, tagged) : undefined;
  const subdistrict =
    /^\p{Script=Han}{2,3}街道$/u.test(source) && ![...source].some(char => HIGHER_UNITS.has(char))
      ? [source.slice(0, -2), "街道"]
      : undefined;
  return (
    (town ?? subdistrict)?.map(word => ({ word })) ??
    tagged.flatMap(word => splitWord(jieba, word, tagged.length === 1))
  ).map(({ word, surname }: Part) => {
    const length = [...word].length;
    const segment = original.slice(index, (index += length)).join("");
    const isWordLike = /\p{L}/u.test(word);
    return {
      segment: isWordLike ? word.replace(/什(?![么麼])/gu, "十") : segment,
      isWordLike,
      surname,
    };
  });
};
