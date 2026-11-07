import { Segmenter } from "intl-segmenter";

// Intl.Segmenter splits Thai words missing from its dictionary (mostly names) into
// pieces that can't be read alone: a bare consonant (ปรียา|ภ|รณ์), a coda silenced
// with ์ (รณ์), or a vowel sign without a consonant (ธีร|ะ|กุล)
const THAI_KARAN = /[ก-ฮ](?:ิ|ุ)?์/g;
// Vowel signs ะ–ฺ, leading vowels เ–ๅ and ็ (no character class: they are combining marks)
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

// Splits a Thai word into the dictionary words it is made of (ธีระกุล → ธีระ|กุล), each
// readable alone, so that a compound name is read piece by piece and written as one word
export const segmentThai = (word: string): string[] => {
  segmenter ??= new Segmenter("th", { granularity: "word" });
  const result: string[] = [];
  let carry = "";
  for (const { segment } of segmenter.segment(word)) {
    const piece = carry + segment;
    carry = "";
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
