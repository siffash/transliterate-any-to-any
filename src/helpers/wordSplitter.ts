import type { KuromojiToken } from "kuroshiro-analyzer-kuromoji";
import { Segmenter } from "intl-segmenter";
import { Language } from "types";
import { languages } from "helpers/constants";
import { toHalfwidth } from "helpers/toHalfwidth";

type Kind = "word" | "open" | "close" | "separator" | "inline";

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

type Segment = {
  segment: string;
  isWordLike?: boolean;
  surname?: boolean;
  tokens?: KuromojiToken[];
};

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

const getWordSegmenter = async (language: Language): Promise<WordSegmenter> => {
  if (language === "zh") return getChineseSegmenter();
  if (language === "ja") return (await import("helpers/segmentJapanese")).segmentJapanese;
  return getIntlSegmenter(language);
};

const needsSpace = (prev: Kind | undefined, next: Kind) =>
  (next === "word" || next === "open") &&
  (prev === "word" || prev === "close" || prev === "separator");

export const wordSplitter = async (
  input: string,
  language: Language,
  fn?: (word: string, givenName: boolean, tokens?: KuromojiToken[]) => string | Promise<string>,
  skipSegmenter?: boolean,
  joinNames?: boolean,
): Promise<string> => {
  if (language === "ko") input = (await import("helpers/normalizeKo")).joinSpacedNames(input);
  const { regex } = languages[language];
  const re = new RegExp(`[${regex}\\p{L}${language === "ja" ? "\\p{Nd}" : ""}]+`, "gu");
  const segment = skipSegmenter ? undefined : await getWordSegmenter(language);
  const parts: string[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input)) !== null) {
    if (m.index > cursor) {
      const wordAfter = PUNCTUATION[input[m.index]]?.[1] !== "close";
      parts.push(toHalfwidth(input.slice(cursor, m.index), cursor > 0, wordAfter));
    }

    let segments = segment ? await segment(m[0]) : [{ segment: m[0], isWordLike: true }];
    if (language === "th") segments = joinThaiWords(segments);

    let prev: Kind | undefined;
    let afterSurname = false;
    const push = async (kind: Kind, text: string, tokens?: KuromojiToken[]) => {
      if (kind === "close" && /^[,.;?]$/.test(text) && parts.length) {
        parts[parts.length - 1] = parts[parts.length - 1]!.replace(/\s+$/, "");
      }
      if (needsSpace(prev, kind) && !(joinNames && afterSurname && kind === "word")) {
        parts.push(" ");
      }
      parts.push(kind === "word" && fn ? await fn(text, afterSurname, tokens) : text);
      prev = kind;
    };

    for (const { segment, isWordLike, surname, tokens } of segments) {
      if (isWordLike) {
        await push("word", segment, tokens);
        afterSurname = Boolean(surname);
      } else {
        for (const char of segment) {
          const [replacement, kind] = PUNCTUATION[char] ?? [
            toHalfwidth(char, false, false),
            "inline",
          ];
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
