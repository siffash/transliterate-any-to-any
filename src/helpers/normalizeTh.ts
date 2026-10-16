import { Segmenter } from "intl-segmenter";

/*
 * Rewrites the Thai signs that are not read as written:
 * • ฦ (and long ฦๅ), which the romanizer does not know, is spelled as ลึ (ลือ);
 * • ฯลฯ ("etc.") becomes "…", and the silent abbreviation sign ฯ is dropped (กรุงเทพฯ → กรุงเทพ);
 * • the repetition sign ๆ is replaced by the word it repeats (เด็กๆ → เด็ก เด็ก).
 * @param text - The Thai text.
 * @returns the normalized text.
 */
export const normalizeTh = (text: string): string => {
  text = text
    .replaceAll(/ฦ[าๅ]/g, "ลือ")
    .replaceAll("ฦ", "ลึ")
    .replaceAll("ฯลฯ", "…")
    .replaceAll("ฯ", "");

  if (!text.includes("ๆ")) {
    return text;
  }

  const segmenter = new Segmenter("th", { granularity: "word" });
  let result = "";
  let lastWord = "";
  let repeated = false;

  for (const { segment, isWordLike } of segmenter.segment(text)) {
    // Keep the next word apart from the repeated one (ไปๆมาๆ → ไป ไป มา มา)
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
