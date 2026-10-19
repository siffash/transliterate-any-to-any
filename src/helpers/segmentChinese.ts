import { getJieba, type Jieba } from "helpers/getJieba";

// Transliterated names stay whole (阿里巴巴, 麦当劳)
const FOREIGN_NAME_TAG = "nrt";
const NAME_TAG = "nr";
// The most common surnames (in simplified Chinese, see loadChineseSegmenter)
const SURNAMES = new Set(
  "王李张刘陈杨黄赵吴周徐孙马朱胡郭何高林罗郑梁谢宋唐许韩冯邓曹彭曾肖田董袁潘于蒋蔡余杜叶程苏魏吕丁任沈姚卢姜崔钟谭陆汪范金石廖贾夏韦付方白邹孟熊秦邱江尹薛闫段雷侯龙史陶黎贺顾毛郝龚邵万钱严覃武戴莫孔向汤",
);
const COMPOUND_SURNAMES = new Set(
  "欧阳 司马 诸葛 上官 东方 皇甫 尉迟 公孙 慕容 长孙 夏侯 司徒 令狐 宇文 端木 轩辕 南宫".split(" "),
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

// Pinyin writes a name as surname + given name (Zhang Weijie, Ouyang Xiu)
const splitName = (name: string) => {
  const chars = [...name];
  const surname = COMPOUND_SURNAMES.has(chars.slice(0, 2).join(""))
    ? 2
    : SURNAMES.has(chars[0])
      ? 1
      : 0;
  return surname && chars.length > surname
    ? [chars.slice(0, surname).join(""), chars.slice(surname).join("")]
    : [name];
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

const splitWord = (jieba: Jieba, { word, tag }: { word: string; tag: string }) => {
  if (tag === FOREIGN_NAME_TAG) return [word];
  // A name jieba knows, or a new word it guessed ("x") of a name's length
  if (tag === NAME_TAG || (tag === "x" && [...word].length === 3)) return splitName(word);
  return splitCompound(jieba, word);
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
  return (text: string) => segmentChinese(jieba, toSimplified, text);
};

const segmentChinese = (jieba: Jieba, toSimplified: (text: string) => string, text: string) => {
  const original = [...text];
  const simplified = toSimplified(text);
  const source = [...simplified].length === original.length ? simplified : text;
  let index = 0;
  return jieba
    .tag(source, true)
    .flatMap(tagged => splitWord(jieba, tagged))
    .map(word => {
      const length = [...word].length;
      const segment = original.slice(index, (index += length)).join("");
      const isWordLike = /\p{L}/u.test(word);
      // Punctuation stays as it was, as wordSplitter replaces it itself
      return { segment: isWordLike ? word : segment, isWordLike };
    });
};
