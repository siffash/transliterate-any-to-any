import { GIVEN_NAMES, NOT_NAMES, SURNAMES } from "data/ko/ko-names";
import { NOT_UNITS, PROVINCES, UNITS } from "data/ko/ko-units";

// Standalone Hangul letters (ㅋ, ㅠ), which are not part of a syllable
const JAMO = /[ㄱ-ㅣ]+/g;
// A word of three syllables, which may be a surname and a given name (김민준)
const NAME = /(?<![가-힣])[가-힣]{3}(?![가-힣])/g;

// Names are romanized as surname + given name (Kim Min-jun), like Chinese ones
const splitNames = (text: string, separator: string, syllableSeparator: string) =>
  text.replace(NAME, word =>
    SURNAMES.has(word[0]) && GIVEN_NAMES.has(word.slice(1)) && !NOT_NAMES.has(word)
      ? `${word[0]}${separator}${Array.from(word.slice(1)).join(syllableSeparator)}`
      : word,
  );

// A word of at least three syllables that ends in an administrative unit (음성군)
const UNIT = new RegExp(`(?<![가-힣·‧])([가-힣]+?)(${UNITS.join("|")})(?![가-힣·‧])`, "g");
// A northern or southern province (경상북도)
const PROVINCE = new RegExp(
  `(?<![가-힣·‧])(${Array.from(PROVINCES).join("|")})([북남]도)(?![가-힣·‧])`,
  "g",
);

// The unit is split off (음성‧군), so that it isn't run together with the name (Eumseong-gun, Samjuk-myeon).
// Some targets split off only the "northern/southern province" of a province (Кёнсан-Намдо)
const splitUnits = (text: string, separator: string, provinceSeparator: string) => {
  const result = provinceSeparator ? text.replace(PROVINCE, `$1${provinceSeparator}$2`) : text;
  return separator
    ? result.replace(UNIT, (word, name: string, unit: string) =>
        Array.from(name).length < 2 ||
        (unit === "도" && !PROVINCES.has(name.replace(/[북남]$/, ""))) ||
        NOT_UNITS.some(notUnit => word.endsWith(notUnit))
          ? word
          : `${name}${separator}${unit}`,
      )
    : result;
};

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

// The vowels of a syllable (가 → ㅏ), in Unicode order
const VOWELS = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
// Revised Romanization letter pairs that are read as one vowel
const DIGRAPHS = new Set(["ae", "eo", "eu", "oe", "ui"]);

// Revised Romanization runs the vowels of two syllables together, which the rules would
// read as another vowel (다은 daeun as 대운): the boundary is marked (da_eun), and the rules remove it.
// So is 의 after any syllable (신의주 sin_euiju), which keeps its glide, unlike ㅢ after a consonant (희 heui),
// and ㄱ after ㄴ (한강 han_gang), which the rules would read as ㅇ (항앙)
const markSyllableBoundaries = (text: string) => {
  let result = "";
  let previous = "";
  let afterSyllable = false;
  let afterN = false;
  for (const char of text) {
    const index = char.charCodeAt(0) - 0xac00;
    const syllable = index >= 0 && index <= 11171;
    const vowel = syllable ? LATN[VOWELS[Math.floor((index % 588) / 28)]] : "";
    // A syllable that begins with the silent ㅇ, after one that ends in a vowel
    if (
      syllable &&
      Math.floor(index / 588) === 11 &&
      (DIGRAPHS.has(previous.slice(-1) + vowel[0]) || (vowel === "ui" && afterSyllable))
    ) {
      result += "_";
    }
    // A syllable that begins with ㄱ, after one that ends in ㄴ
    if (syllable && Math.floor(index / 588) === 0 && afterN) {
      result += "_";
    }
    previous = syllable && index % 28 === 0 ? vowel : "";
    afterSyllable = syllable;
    afterN = syllable && index % 28 === 4;
    result += char;
  }
  return result;
};

type KoSeparator = { name?: string; syllable?: string; unit?: string; province?: string };

/*
 * Converts Korean text, spelling standalone letters (ㅋㅋㅋ, ㅠㅠ) letter by letter,
 * and passing everything in between to the given converter.
 * @param text - The Korean text.
 * @param convert - The converter for the rest of the text.
 * @param letters - "latn" to spell the letters in Revised Romanization, "ipa" in IPA.
 * @param separator - What goes between the parts of names:
 * - name: between a surname and a given name (" " by default); a marker other than a space
 *   lets the rules treat the given name's first consonant as inside the word (Kim Džong Un). With "ipa",
 *   it is replaced with a space in the result.
 * - syllable: between the syllables of a given name: "-" (Ki-moon), the name separator (Ги Мун),
 *   or nothing (Kimun), the default.
 * - unit: before an administrative unit (Eumseong-gun), or nothing to keep it in the word (Ымсонгун),
 *   the default.
 * - province: before the "northern/southern province" of a province (Кёнсан-Намдо), or nothing, the default.
 * @param convertLetters - An optional converter for the spelled letters.
 * @returns the converted text.
 */
export const normalizeKo = async (
  text: string,
  convert: (text: string) => string | Promise<string>,
  letters: "latn" | "ipa",
  { name = " ", syllable = "", unit = "", province = "" }: KoSeparator = {},
  convertLetters: (text: string) => string = text => text,
): Promise<string> => {
  const map = letters === "latn" ? LATN : IPA;
  const prepare = (text: string) => {
    const result = splitUnits(splitNames(text, name, syllable), unit, province);
    return letters === "latn" ? markSyllableBoundaries(result) : result;
  };
  const parts: string[] = [];
  let cursor = 0;

  for (const m of text.matchAll(JAMO)) {
    if (m.index > cursor) {
      parts.push(await convert(prepare(text.slice(cursor, m.index))));
    }
    parts.push(convertLetters(Array.from(m[0], jamo => map[jamo]).join("")));
    cursor = m.index + m[0].length;
  }

  if (cursor < text.length) {
    parts.push(await convert(prepare(text.slice(cursor))));
  }

  // The converters that go through IPA keep the separator until here, so that it isn't filtered out
  const result = parts.join("");
  return letters === "ipa" ? result.replaceAll(name, " ") : result;
};
