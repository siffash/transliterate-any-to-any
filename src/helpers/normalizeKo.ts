import { GIVEN_NAMES, NOT_NAMES, NOT_NAME_ENDINGS, SURNAMES } from "data/ko/ko-names";
import { NOT_DONGS, NOT_UNITS, PROVINCES, UNITS } from "data/ko/ko-units";

const JAMO = /[ㄱ-ㅣ]+/g;
const NAME = /(?<![가-힣])[가-힣]{3}(?![가-힣])/g;

const SPACED_NAME = /(?<![가-힣])([가-힣]) ([가-힣]{2})(?![가-힣])/g;

export const joinSpacedNames = (text: string) =>
  text.replace(SPACED_NAME, (match, surname: string, given: string) =>
    SURNAMES.has(surname) && GIVEN_NAMES.has(given) && !NOT_NAMES.has(surname + given)
      ? surname + given
      : match,
  );

const splitNames = (text: string, separator: string, syllableSeparator: string) =>
  text.replace(NAME, word =>
    SURNAMES.has(word[0]) &&
    (GIVEN_NAMES.has(word.slice(1)) || !NOT_NAME_ENDINGS.has(word[2]!)) &&
    !NOT_NAMES.has(word)
      ? `${word[0]}${separator}${Array.from(word.slice(1)).join(syllableSeparator)}`
      : word,
  );

const UNIT = new RegExp(`(?<![가-힣·‧])([가-힣]+?)(${UNITS.join("|")})(?![가-힣·‧])`, "g");
const PROVINCE = new RegExp(
  `(?<![가-힣·‧])(${Array.from(PROVINCES).join("|")})([북남]도)(?![가-힣·‧])`,
  "g",
);

const splitUnits = (text: string, separator: string, provinceSeparator: string) => {
  const result = provinceSeparator ? text.replace(PROVINCE, `$1${provinceSeparator}$2`) : text;
  return separator
    ? result.replace(UNIT, (word, name: string, unit: string) =>
        (Array.from(name).length < 2 && (unit !== "동" || NOT_DONGS.has(word))) ||
        (unit === "도" && !PROVINCES.has(name.replace(/[북남]$/, ""))) ||
        NOT_UNITS.some(notUnit => word.endsWith(notUnit))
          ? word
          : `${name}${separator}${unit}`,
      )
    : result;
};

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

const VOWELS = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const DIGRAPHS = new Set(["ae", "eo", "eu", "oe", "ui"]);

const markSyllableBoundaries = (text: string) => {
  let result = "";
  let previous = "";
  let afterSyllable = false;
  let afterN = false;
  for (const char of text) {
    const index = char.charCodeAt(0) - 0xac00;
    const syllable = index >= 0 && index <= 11171;
    const vowel = syllable ? LATN[VOWELS[Math.floor((index % 588) / 28)]] : "";
    if (
      syllable &&
      Math.floor(index / 588) === 11 &&
      (DIGRAPHS.has(previous.slice(-1) + vowel[0]) || (vowel === "ui" && afterSyllable))
    ) {
      result += "_";
    }
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

export type KoSeparator = { name?: string; syllable?: string; unit?: string; province?: string };

export const normalizeKo = async (
  text: string,
  convert: (text: string) => string | Promise<string>,
  letters: "latn" | "ipa",
  { name = " ", syllable = "", unit = "", province = "" }: KoSeparator = {},
  convertLetters: (text: string) => string = text => text,
): Promise<string> => {
  const map = letters === "latn" ? LATN : IPA;
  const prepare = (text: string) => {
    const result = splitUnits(splitNames(joinSpacedNames(text), name, syllable), unit, province);
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

  const result = parts.join("");
  return letters === "ipa" ? result.replaceAll(name, " ") : result;
};
