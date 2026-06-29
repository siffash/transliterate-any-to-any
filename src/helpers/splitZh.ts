import { Segmenter } from "intl-segmenter";

const CJK_RUN_RE = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u{20000}-\u{2EBEF}]+/u;

const wordSegmenter = new Segmenter("zh", { granularity: "word" });

export const splitZh = (input: string, fn?: (word: string) => string): string => {
  const re = new RegExp(CJK_RUN_RE.source, "gu");
  const parts: string[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input)) !== null) {
    if (m.index > cursor) {
      parts.push(input.slice(cursor, m.index));
    }

    let words: string[] = [];
    for (const seg of wordSegmenter.segment(m[0])) {
      if (seg.isWordLike) {
        words.push(seg.segment);
      }
    }

    if (fn) {
      const transformed: string[] = [];
      for (let i = 0; i < words.length; i++) {
        transformed.push(fn(words[i]));
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
