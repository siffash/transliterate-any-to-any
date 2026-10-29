import {
  COMPOUND_SURNAMES,
  DYNASTIES,
  EMPEROR_TITLES,
  NAMES,
  NOT_NAMES,
  PLACE_ENDINGS,
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

const splitWord = (
  jieba: Jieba,
  { word, tag }: { word: string; tag: string },
  alone: boolean,
): Part[] => {
  if (tag === FOREIGN_NAME_TAG || tag === EMPEROR_TAG) return [{ word }];
  const length = [...word].length;
  // A name jieba knows, or a new word it guessed ("x") of a name's length:
  // three characters, or two when it's the whole word (王伟, 张伟)
  if (
    NAMES.has(word) ||
    NAME_TAGS.has(tag) ||
    (tag === "x" && (length === 3 || (length === 2 && alone)))
  ) {
    return splitName(word);
  }
  return splitCompound(jieba, word).map(word => ({ word }));
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
  const simplified = toSimplified(text);
  const source = [...simplified].length === original.length ? simplified : text;
  let index = 0;
  const tagged = tagWords(jieba, source);
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
