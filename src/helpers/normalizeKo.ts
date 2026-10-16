// Standalone Hangul letters (ㅋ, ㅠ), which are not part of a syllable
const JAMO = /[ㄱ-ㅣ]+/g;

// Revised Romanization of each letter, as ICU's Hangul-Latin does it
const LATN: Record<string, string> = {
  ㄱ: "g",
  ㄲ: "kk",
  ㄳ: "gs",
  ㄴ: "n",
  ㄵ: "nj",
  ㄶ: "nh",
  ㄷ: "d",
  ㄸ: "tt",
  ㄹ: "r",
  ㄺ: "lg",
  ㄻ: "lm",
  ㄼ: "lb",
  ㄽ: "ls",
  ㄾ: "lt",
  ㄿ: "lp",
  ㅀ: "lh",
  ㅁ: "m",
  ㅂ: "b",
  ㅃ: "pp",
  ㅄ: "bs",
  ㅅ: "s",
  ㅆ: "ss",
  ㅇ: "ng",
  ㅈ: "j",
  ㅉ: "jj",
  ㅊ: "ch",
  ㅋ: "k",
  ㅌ: "t",
  ㅍ: "p",
  ㅎ: "h",
  ㅏ: "a",
  ㅐ: "ae",
  ㅑ: "ya",
  ㅒ: "yae",
  ㅓ: "eo",
  ㅔ: "e",
  ㅕ: "yeo",
  ㅖ: "ye",
  ㅗ: "o",
  ㅘ: "wa",
  ㅙ: "wae",
  ㅚ: "oe",
  ㅛ: "yo",
  ㅜ: "u",
  ㅝ: "wo",
  ㅞ: "we",
  ㅟ: "wi",
  ㅠ: "yu",
  ㅡ: "eu",
  ㅢ: "ui",
  ㅣ: "i",
};

// The sound of each letter, for the converters that go through IPA
const IPA: Record<string, string> = {
  ㄱ: "k",
  ㄲ: "k͈",
  ㄳ: "ks",
  ㄴ: "n",
  ㄵ: "ntɕ",
  ㄶ: "nh",
  ㄷ: "t",
  ㄸ: "t͈",
  ㄹ: "l",
  ㄺ: "lk",
  ㄻ: "lm",
  ㄼ: "lp",
  ㄽ: "ls",
  ㄾ: "ltʰ",
  ㄿ: "lpʰ",
  ㅀ: "lh",
  ㅁ: "m",
  ㅂ: "p",
  ㅃ: "p͈",
  ㅄ: "ps",
  ㅅ: "s",
  ㅆ: "s͈",
  ㅇ: "ŋ",
  ㅈ: "tɕ",
  ㅉ: "t͈ɕ",
  ㅊ: "tɕʰ",
  ㅋ: "kʰ",
  ㅌ: "tʰ",
  ㅍ: "pʰ",
  ㅎ: "h",
  ㅏ: "a",
  ㅐ: "ɛ",
  ㅑ: "ja",
  ㅒ: "jɛ",
  ㅓ: "ʌ",
  ㅔ: "e",
  ㅕ: "jʌ",
  ㅖ: "je",
  ㅗ: "o",
  ㅘ: "wa",
  ㅙ: "wɛ",
  ㅚ: "we",
  ㅛ: "jo",
  ㅜ: "u",
  ㅝ: "wʌ",
  ㅞ: "we",
  ㅟ: "wi",
  ㅠ: "ju",
  ㅡ: "ɯ",
  ㅢ: "ɰi",
  ㅣ: "i",
};

/*
 * Converts Korean text, spelling standalone letters (ㅋㅋㅋ, ㅠㅠ) letter by letter,
 * and passing everything in between to the given converter.
 * @param text - The Korean text.
 * @param convert - The converter for the rest of the text.
 * @param letters - "latn" to spell the letters in Revised Romanization, "ipa" in IPA.
 * @param convertLetters - An optional converter for the spelled letters.
 * @returns the converted text.
 */
export const normalizeKo = async (
  text: string,
  convert: (text: string) => string | Promise<string>,
  letters: "latn" | "ipa",
  convertLetters: (text: string) => string = text => text,
): Promise<string> => {
  const map = letters === "latn" ? LATN : IPA;
  const parts: string[] = [];
  let cursor = 0;

  for (const m of text.matchAll(JAMO)) {
    if (m.index > cursor) {
      parts.push(await convert(text.slice(cursor, m.index)));
    }
    parts.push(convertLetters(Array.from(m[0], jamo => map[jamo]).join("")));
    cursor = m.index + m[0].length;
  }

  if (cursor < text.length) {
    parts.push(await convert(text.slice(cursor)));
  }

  return parts.join("");
};
