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
  "​": ["", "separator"],
};

// Whether a space goes between the previous token and the next one, e.g.
// `word word`, `word, word`, `word "word"`, but `"word"` and `word.`
const needsSpace = (prev: Kind | undefined, next: Kind) =>
  (next === "word" || next === "open") &&
  (prev === "word" || prev === "close" || prev === "separator");

export const wordSplitter = async (
  input: string,
  language: Language,
  fn?: (word: string) => string | Promise<string>,
  skipSegmenter?: boolean,
): Promise<string> => {
  const { regex } = languages[language];
  const re = new RegExp(`[${regex}\\p{L}]+`, "gu");
  const segmenter = new Segmenter(language, { granularity: "word" });
  const parts: string[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input)) !== null) {
    if (m.index > cursor) {
      parts.push(input.slice(cursor, m.index));
    }

    const segments = skipSegmenter
      ? [{ segment: m[0], isWordLike: true }]
      : Array.from(segmenter.segment(m[0]));

    let prev: Kind | undefined;
    const push = async (kind: Kind, text: string) => {
      if (needsSpace(prev, kind)) {
        parts.push(" ");
      }
      parts.push(kind === "word" && fn ? await fn(text) : text);
      prev = kind;
    };

    for (const { segment, isWordLike } of segments) {
      if (isWordLike) {
        await push("word", segment);
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
    parts.push(input.slice(cursor));
  }

  return parts.join("").replace(/ {2,}/g, " ");
};
