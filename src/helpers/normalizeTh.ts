import { Segmenter } from "intl-segmenter";

export const normalizeTh = (text: string): string => {
  text = text
    .replaceAll(/ฦ[าๅ]/g, "ลือ")
    .replaceAll("ฦ", "ลึ")
    .replaceAll("ฯลฯ", "…")
    .replaceAll("ฯ", "")
    .replaceAll(/(?<![\u0E00-\u0E7F])ณ(?![\u0E00-\u0E7F])/g, "ณะ");

  if (!text.includes("ๆ")) {
    return text;
  }

  const segmenter = new Segmenter("th", { granularity: "word" });
  let result = "";
  let lastWord = "";
  let repeated = false;

  for (const { segment, isWordLike } of segmenter.segment(text)) {
    const separator = repeated && isWordLike ? " " : "";
    repeated = !!isWordLike && segment.includes("ๆ");
    if (!repeated) {
      result += separator + segment;
      if (isWordLike) {
        lastWord = segment;
      }
      continue;
    }
    const word = segment.replaceAll("ๆ", "");
    if (word) {
      lastWord = word;
      result += `${separator}${word} ${word}`;
    } else {
      result += separator + lastWord;
    }
  }

  return result;
};
