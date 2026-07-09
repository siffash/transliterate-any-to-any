import { Segmenter } from "intl-segmenter";
import { Language } from "types";
import { languages, scripts } from "helpers/constants";

export const wordSplitter = async (
  input: string,
  language: Language,
  fn?: (word: string) => string | Promise<string>,
  skipSegmenter?: boolean,
): Promise<string> => {
  const { script } = languages[language];
  const re = new RegExp(`[${scripts[script].regex}]+`, "gu");
  const segmenter = new Segmenter(language, { granularity: "word" });
  const parts: string[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input)) !== null) {
    if (m.index > cursor) {
      parts.push(input.slice(cursor, m.index));
    }

    let words: string[] = [];
    if (skipSegmenter) {
      words.push(m[0]);
    } else {
      for (const seg of segmenter.segment(m[0])) {
        if (seg.isWordLike) {
          words.push(seg.segment);
        }
      }
    }

    if (fn) {
      const transformed: string[] = [];
      for (let i = 0; i < words.length; i++) {
        transformed.push(await fn(words[i]));
      }
      words = transformed;
    }

    parts.push(words.join(" "));
    cursor = re.lastIndex;
  }

  if (cursor < input.length) {
    parts.push(input.slice(cursor));
  }

  return parts.join("");
};
