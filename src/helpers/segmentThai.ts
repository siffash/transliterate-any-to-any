import { Segmenter } from "intl-segmenter";

const THAI_KARAN = /[ก-ฮ](?:ิ|ุ)?์/g;
const isThaiVowel = (char: string) => {
  const code = char.codePointAt(0)!;
  return (
    (code >= 0x0e30 && code <= 0x0e3a) || (code >= 0x0e40 && code <= 0x0e45) || code === 0x0e47
  );
};
const isThaiFragment = (segment: string) => {
  const core = segment.replace(THAI_KARAN, "");
  const consonants = core.match(/[ก-ฮ]/g)?.length ?? 0;
  return (
    consonants === 0 || (consonants === 1 && !Array.from(core).some(isThaiVowel) && core !== "ณ")
  );
};

let segmenter: Segmenter | undefined;

export const segmentThai = (word: string): string[] => {
  segmenter ??= new Segmenter("th", { granularity: "word" });
  const result: string[] = [];
  let carry = "";
  for (const { segment } of segmenter.segment(word)) {
    const piece = carry + segment;
    carry = "";
    const previous = result[result.length - 1];
    if (
      previous !== undefined &&
      ((/เ[ก-ฮ]{1,2}ื[่้๊๋]?$/u.test(previous) && segment.startsWith("อ")) ||
        (/เ[ก-ฮ]{1,2}ี[่้๊๋]?$/u.test(previous) && segment.startsWith("ย")) ||
        (/[ก-ฮ]$/u.test(previous) && /^[ะาำ]/u.test(segment)))
    ) {
      result[result.length - 1] += piece;
      continue;
    }
    if (isThaiFragment(segment)) {
      const core = segment.replace(THAI_KARAN, "");
      const coda = segment.includes("์") || !/[ก-ฮ]/.test(core);
      if (coda && result.length) {
        result[result.length - 1] += piece;
        continue;
      }
      if (!coda) {
        carry = piece;
        continue;
      }
    }
    result.push(piece);
  }
  if (carry) {
    if (result.length) result[result.length - 1] += carry;
    else result.push(carry);
  }
  return result;
};
