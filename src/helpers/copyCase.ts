import { Language } from "types";

type CaseType = "lower" | "upper" | "title";

interface Token {
  readonly text: string;
  readonly isWord: boolean;
}

export const copyCase = (from: string, to: string, lang: Language): string => {
  const fromSegments = from.split(SEPARATOR);
  const toSegments = to.split(SEPARATOR);
  if (fromSegments.length === 1 || fromSegments.length !== toSegments.length) {
    return copyWordCase(from, to, lang);
  }
  return toSegments
    .map((segment, i) => (i % 2 ? segment : copyWordCase(fromSegments[i], segment, lang)))
    .join("");
};

const SEPARATOR = /([,،;؛\n])/u;

const copyWordCase = (from: string, to: string, lang: Language): string => {
  const words = tokenize(from)
    .filter((t: Token) => t.isWord)
    .map((t: Token) => t.text);
  const cases = words.map(getWordCase);

  const fallback: CaseType =
    cases.length > 0 && cases.every(c => c === "upper") ? "upper" : "lower";

  let wi = 0;
  return tokenize(to)
    .map((t: Token) => {
      if (!t.isWord) return t.text;
      if (wi >= cases.length) return applyCase(t.text, fallback, lang);
      const word = words[wi];
      return applyApostropheCase(t.text, word, cases[wi++], lang);
    })
    .join("");
};

const APOSTROPHE = /(['’‘`´ʼ՚])/u;

const applyApostropheCase = (
  word: string,
  from: string,
  type: CaseType,
  lang: Language,
): string => {
  const parts = word.split(APOSTROPHE);
  const fromParts = from.split(APOSTROPHE).filter((_, i) => i % 2 === 0);
  if (type !== "title" || parts.length === 1 || fromParts.length !== (parts.length + 1) / 2) {
    return applyCase(word, type, lang);
  }
  return parts
    .map((part, i) => (i % 2 ? part : applyCase(part, getWordCase(fromParts[i / 2]), lang)))
    .join("");
};

const isLetter = (ch: string): boolean => ch.toLowerCase() !== ch.toUpperCase();

const isUpper = (ch: string): boolean => isLetter(ch) && ch === ch.toUpperCase();

const isLower = (ch: string): boolean => isLetter(ch) && ch === ch.toLowerCase();

const isWordJoiner = (ch: string): boolean => /[\p{M}'’‘`´ʼ՚]/u.test(ch);

const getWordCase = (word: string): CaseType => {
  const letters = [...word].filter(letter => isLetter(letter));
  if (!letters.length) return "lower";
  if (letters.length === 1) return isUpper(letters[0]) ? "title" : "lower";
  if (letters.every(letter => isUpper(letter))) return "upper";
  if (letters.every(letter => isLower(letter))) return "lower";
  return "title";
};

const applyCase = (word: string, type: CaseType, lang: Language): string => {
  if (type === "upper") return word.toLocaleUpperCase(lang);
  const lower = word.toLocaleLowerCase(lang);
  if (type === "lower") return lower;

  const chars = [...lower];
  const i = chars.findIndex(ch => isLetter(ch));
  if (i < 0) return lower;
  const [head, ...tail] = [...chars[i].toLocaleUpperCase(lang)];
  chars[i] = head + tail.join("").toLocaleLowerCase(lang);
  return chars.join("");
};

const tokenize = (str: string): Token[] => {
  const tokens: Token[] = [];
  const chars = [...str];
  if (!chars.length) return tokens;

  let buf = chars[0];
  let mode = isLetter(chars[0]);

  for (let i = 1; i < chars.length; i++) {
    const ch = chars[i];
    if (isWordJoiner(ch)) {
      buf += ch;
      continue;
    }
    const m = isLetter(ch);
    if (m === mode) {
      buf += ch;
    } else {
      tokens.push({ text: buf, isWord: mode });
      buf = ch;
      mode = m;
    }
  }
  tokens.push({ text: buf, isWord: mode });
  return tokens;
};
