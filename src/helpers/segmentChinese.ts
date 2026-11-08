import {
  AREAS,
  COMPOUND_SURNAMES,
  DYNASTIES,
  EMPEROR_TITLES,
  LANDFORM_ENDINGS,
  NAMES,
  NOT_NAMES,
  PLACE_ENDINGS,
  PLACE_GENERICS,
  PROVINCES,
  RARER_SURNAMES,
  SURNAMES,
} from "data/zh/zh-names";
import { getJieba, type Jieba } from "helpers/getJieba";

// Transliterated names stay whole (阿里巴巴, 麦当劳)
const FOREIGN_NAME_TAG = "nrt";
// Names jieba knows, "nrfg" being well-known people (李强, 刘备)
const NAME_TAGS = new Set(["nr", "nrfg"]);
// An emperor's dynasty and title, each a word of its own (唐|太宗)
const EMPEROR_TAG = "emperor";
// Three characters that jieba read as words, taken as one name (see segmentChinese)
const JOINED_TAG = "joined";

// Longer titles first, so that 光武帝 isn't taken as 武帝
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

// A surname is marked, as Korean writes it together with the given name (마오쩌둥)
type Part = { word: string; surname?: boolean };

// Pinyin writes a name as surname + given name (Zhang Weijie, Ouyang Xiu), but
// not a place or a foreign name that jieba takes for one (石家庄, 许昌, 马丁)
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
        (RARER_SURNAMES.has(chars[0]) && (chars.length === 3 || NAMES.has(name)))
      ? 1
      : 0;
  return surname && chars.length > surname
    ? [
        { word: chars.slice(0, surname).join(""), surname: true },
        { word: chars.slice(surname).join("") },
      ]
    : [{ word: name }];
};

// jieba's dictionary has long compounds (中华人民共和国, 清华大学, 今天天气),
// which pinyin writes as separate words (Zhonghua Renmin Gongheguo): they're
// split into the fewest of the shorter words that its search mode finds inside
const splitCompound = (jieba: Jieba, word: string) => {
  if ([...word].length < 4) return [word];
  const parts = jieba.cut_for_search(word, true).filter(part => part !== word);
  // fewest[i]: the fewest parts that make up word.slice(i)
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

// A place's own name stays whole, apart from the generic terms after it (Erlianhaote,
// Lianyungangshi, Pudong Xinqu, Linxia Huizu Zizhizhou) and a province before it (Shanxi Datong)
const splitPlace = (word: string) => {
  const chars = [...word];
  const generics: string[] = [];
  let end = chars.length;
  // Longest first, so that 土家族 isn't taken as 家族, nor 东乡族自治县 as 东乡 and 族
  for (let length = 5; length >= 2; length--) {
    const generic = chars.slice(end - length, end).join("");
    if (end - length >= 2 && PLACE_GENERICS.has(generic)) {
      generics.unshift(generic);
      end -= length;
      length = 6;
    }
  }
  const province = [3, 2].find(
    length => end - length >= 2 && PROVINCES.has(chars.slice(0, length).join("")),
  );
  return [
    ...(province
      ? [chars.slice(0, province).join(""), chars.slice(province, end).join("")]
      : [chars.slice(0, end).join("")]),
    ...generics,
  ];
};

// Nor is a place that jieba doesn't tag as one cut before its last character
// (冷水|滩区 is 冷水滩区, but 峰峰|矿区 and 自然|保护区 stay)
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
  // A name jieba knows, or a new word it guessed ("x") of a name's length:
  // three characters, or two when it's the whole word (王伟, 张伟)
  if (
    NAMES.has(word) ||
    NAME_TAGS.has(tag) ||
    (tag === "x" && (length === 3 || (length === 2 && alone)))
  ) {
    return splitName(word);
  }
  return (tag === "ns" && length >= 4 ? splitPlace(word) : splitOther(jieba, word)).map(word => ({
    word,
  }));
};

let namesAdded = false;

// The listed people become words of jieba's that it tags as names, as it splits some
// (屠呦呦 as 屠|呦|呦) and tags others as something else (周恩来 as a time word)
const addNames = (jieba: Jieba) => {
  if (namesAdded) return;
  namesAdded = true;
  for (const name of NAMES) jieba.add_word(name, null, "nr");
};

// jieba joins an emperor's dynasty and title with the characters around them
// (宋徽宗赵佶 as 宋徽|宗赵佶), so they're split off before it sees the text
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

/**
 * Chinese words from jieba: without the CJ dictionary in the engine's ICU data
 * (e.g. in Android's Chrome and WebView), Intl.Segmenter splits Chinese into
 * single characters, whose readings then lose their context (银|行 → yín xíng).
 *
 * jieba's dictionary and pinyin-pro's readings are in simplified Chinese, so
 * traditional text is split by its simplified form (OpenCC converts it
 * character for character), and its words are given in that form.
 *
 * Rejects if jieba or OpenCC can't be loaded.
 */
export const loadChineseSegmenter = async () => {
  const [jieba, toSimplified] = await Promise.all([getJieba(), getToSimplified()]);
  addNames(jieba);
  return (text: string) => segmentChinese(jieba, toSimplified, text);
};

const segmentChinese = (jieba: Jieba, toSimplified: (text: string) => string, text: string) => {
  const original = [...text];
  // OpenCC takes 乾 for 干 "dry" (乾安县 as 干安县), but in a name it's qián, which
  // simplified Chinese writes 乾 too (乾隆, 乾县)
  const simplified = [...toSimplified(text)].map((char, i) => (original[i] === "乾" ? "乾" : char));
  const source = simplified.length === original.length ? simplified.join("") : text;
  let index = 0;
  let tagged = tagWords(jieba, source);
  // Three characters on their own are a name, even when jieba reads words in them (许家|印,
  // 寮|步镇, 王家|营): its ending tells a place (Liaobuzhen, Wangjiaying) from a person (Xu Jiayin)
  if (
    tagged.length > 1 &&
    /^\p{Script=Han}{3}$/u.test(source) &&
    tagged.every(({ tag }) => tag !== FOREIGN_NAME_TAG && tag !== EMPEROR_TAG)
  ) {
    tagged = [{ word: source, tag: JOINED_TAG }];
  }
  return tagged
    .flatMap(word => splitWord(jieba, word, tagged.length === 1))
    .map(({ word, surname }) => {
      const length = [...word].length;
      const segment = original.slice(index, (index += length)).join("");
      const isWordLike = /\p{L}/u.test(word);
      // Punctuation stays as it was, as wordSplitter replaces it itself
      return { segment: isWordLike ? word : segment, isWordLike, surname };
    });
};
