import { Segmenter } from "intl-segmenter";
import { Language } from "types";
import { languages } from "helpers/constants";

type Kind = "word" | "open" | "close" | "separator" | "inline";

// Punctuation that a language's regex also matches, because Unicode assigns it
// to the Han/kana or Arabic scripts. It is replaced by a script-neutral
// equivalent so that the output stays valid in any target script.
const PUNCTUATION: Record<string, [replacement: string, kind: Kind]> = {
  "。": [".", "close"],
  "｡": [".", "close"],
  "、": [",", "close"],
  "､": [",", "close"],
  "،": [",", "close"],
  "؛": [";", "close"],
  "؟": ["?", "close"],
  "۔": [".", "close"],
  "「": ['"', "open"],
  "」": ['"', "close"],
  "『": ['"', "open"],
  "』": ['"', "close"],
  "《": ['"', "open"],
  "》": ['"', "close"],
  "〈": ['"', "open"],
  "〉": ['"', "close"],
  "【": ["[", "open"],
  "】": ["]", "close"],
  "〔": ["[", "open"],
  "〕": ["]", "close"],
  "〜": ["~", "inline"],
  "・": ["", "separator"],
  "·": ["", "separator"],
  "​": ["", "separator"],
};

// Fullwidth punctuation between words (，（）！) becomes ASCII, which every target script uses,
// with the space its width implied: 北京，上海 → Beijing, Shanghai
const toHalfwidth = (text: string, wordBefore: boolean, wordAfter: boolean) =>
  text.replace(/[\uFF01-\uFF5E]/g, (char, offset: number) => {
    const mark = String.fromCharCode(char.charCodeAt(0) - 0xfee0);
    const prev = text[offset - 1];
    const next = text[offset + 1];
    if (
      /[,;:!?)]/.test(mark) &&
      (next ? !/[\s.,;:!?)\uFF0E\uFF0C\uFF1B\uFF1A\uFF01\uFF1F\uFF09]/.test(next) : wordAfter)
    ) {
      return mark + " ";
    }
    if (mark === "(" && (prev ? !/[\s(\uFF08]/.test(prev) : wordBefore)) return " " + mark;
    return mark;
  });

// surname: a Chinese surname split off its given name (see segmentChinese)
type Segment = { segment: string; isWordLike?: boolean; surname?: boolean };

// A name written without spaces stays one word, even when Intl.Segmenter splits it into
// the dictionary words it is made of (ธีระ|กุล): the Thai reader reads those pieces itself
// (see segmentThai)
const joinThaiWords = (segments: Segment[]): Segment[] => {
  const result: Segment[] = [];
  for (const { segment, isWordLike } of segments) {
    const previous = result[result.length - 1];
    if (isWordLike && previous?.isWordLike) previous.segment += segment;
    else result.push({ segment, isWordLike });
  }
  return result;
};

type WordSegmenter = (text: string) => Promise<Segment[]> | Segment[];

const getIntlSegmenter = (language: Language): WordSegmenter => {
  const segmenter = new Segmenter(language, { granularity: "word" });
  return text => Array.from(segmenter.segment(text));
};

let warnedChineseFallback = false;

// jieba is WebAssembly, which some environments don't run or load (no
// WebAssembly, a CSP without 'wasm-unsafe-eval', a bundler that doesn't emit
// its .wasm, offline in a browser): Chinese then falls back to Intl.Segmenter,
// whose words are worse but still words. The next call tries jieba again,
// unless there's no WebAssembly at all.
const getChineseSegmenter = async (): Promise<WordSegmenter> => {
  const fallback = getIntlSegmenter("zh");
  const warn = (e: unknown) => {
    if (warnedChineseFallback) return;
    warnedChineseFallback = true;
    console.warn(
      "transliterate-any-to-any: Chinese word segmentation (jieba-wasm) failed, so Intl.Segmenter splits Chinese into words instead",
      e,
    );
  };
  if (typeof WebAssembly === "undefined") {
    warn(new Error("WebAssembly is not available"));
    return fallback;
  }
  try {
    const segment = await (await import("helpers/segmentChinese")).loadChineseSegmenter();
    return text => {
      try {
        return segment(text);
      } catch (e) {
        warn(e);
        return fallback(text);
      }
    };
  } catch (e) {
    warn(e);
    return fallback;
  }
};

// Chinese and Japanese words come from the dictionaries the library ships,
// because Intl.Segmenter splits them according to the engine's ICU data,
// which on Android lacks the CJ dictionary (see loadChineseSegmenter, segmentJapanese)
const getWordSegmenter = async (language: Language): Promise<WordSegmenter> => {
  if (language === "zh") return getChineseSegmenter();
  if (language === "ja") return (await import("helpers/segmentJapanese")).segmentJapanese;
  return getIntlSegmenter(language);
};

// Whether a space goes between the previous token and the next one, e.g.
// `word word`, `word, word`, `word "word"`, but `"word"` and `word.`
const needsSpace = (prev: Kind | undefined, next: Kind) =>
  (next === "word" || next === "open") &&
  (prev === "word" || prev === "close" || prev === "separator");

export const wordSplitter = async (
  input: string,
  language: Language,
  fn?: (word: string, givenName: boolean) => string | Promise<string>,
  skipSegmenter?: boolean,
  joinNames?: boolean,
): Promise<string> => {
  const { regex } = languages[language];
  const re = new RegExp(`[${regex}\\p{L}]+`, "gu");
  const segment = skipSegmenter ? undefined : await getWordSegmenter(language);
  const parts: string[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input)) !== null) {
    if (m.index > cursor) {
      // no space before the source script's own closing mark: 上海（武昌）、南京 → (Wuchang), Nanjing
      const wordAfter = PUNCTUATION[input[m.index]]?.[1] !== "close";
      parts.push(toHalfwidth(input.slice(cursor, m.index), cursor > 0, wordAfter));
    }

    let segments = segment ? await segment(m[0]) : [{ segment: m[0], isWordLike: true }];
    if (language === "th") segments = joinThaiWords(segments);

    let prev: Kind | undefined;
    let afterSurname = false;
    const push = async (kind: Kind, text: string) => {
      if (needsSpace(prev, kind) && !(joinNames && afterSurname && kind === "word")) {
        parts.push(" ");
      }
      parts.push(kind === "word" && fn ? await fn(text, afterSurname) : text);
      prev = kind;
    };

    for (const { segment, isWordLike, surname } of segments) {
      if (isWordLike) {
        await push("word", segment);
        afterSurname = Boolean(surname);
      } else {
        for (const char of segment) {
          const [replacement, kind] = PUNCTUATION[char] ?? [char, "inline"];
          await push(kind, replacement);
        }
      }
    }

    cursor = re.lastIndex;
  }

  if (cursor < input.length) {
    parts.push(toHalfwidth(input.slice(cursor), cursor > 0, false));
  }

  return parts.join("").replace(/ {2,}/g, " ");
};
