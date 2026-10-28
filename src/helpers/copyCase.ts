import { Language } from "types";

type CaseType = "lower" | "upper" | "title";

interface Token {
  readonly text: string;
  readonly isWord: boolean;
}

/**
 * Copies the case pattern of each word in `from` to the
 * corresponding word in `to`.
 *
 * Rules
 * ─────
 * • Words are sequences of cased Unicode letters (any script).
 * • Combining diacritical marks (Unicode category M) are kept
 *   inside the word they visually belong to, so decomposed
 *   characters like e + ◌́ (NFD) are not treated as word-breakers.
 * • Non-letter characters (punctuation, spaces, digits …) are
 *   preserved verbatim in the output.
 * • If `from` has more words than `to`, the extra case patterns
 *   are silently ignored. If `to` has more words, the extra
 *   words stay lowercase, unless every word in `from` is
 *   uppercase, in which case they are uppercased too.
 * • Case classes: "lower" (word), "upper" (WORD), "title" (Word).
 *
 * • Lists ("a, b; c") are matched segment by segment when both
 *   texts have the same number of separators, so a word lost in
 *   one item doesn't shift the case of every later item.
 *
 * Works with Latin, Cyrillic, Greek, Armenian, and any other
 * Unicode script that has case distinctions.
 */
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

/**
 * Applies a word's case; a mixed-case word with the same apostrophes in both
 * is cased part by part (d'Artagnan → д’Артаньян).
 */
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

/** A character "has case" if its lower and upper forms differ. */
const isLetter = (ch: string): boolean => ch.toLowerCase() !== ch.toUpperCase();

const isUpper = (ch: string): boolean => isLetter(ch) && ch === ch.toUpperCase();

const isLower = (ch: string): boolean => isLetter(ch) && ch === ch.toLowerCase();

/**
 * Combining marks (Unicode category M: Mn, Mc, Me) attach visually
 * to a preceding base letter. They must not act as word-breakers;
 * e.g. the NFD sequence "e\u0301" (decomposed é) must stay together
 * as part of one word token, not split into "e" | "◌́".
 * The same applies for all kinds of apostrophes.
 */
const isWordJoiner = (ch: string): boolean => /[\p{M}'’‘`´ʼ՚]/u.test(ch);

/**
 * Classifies the case pattern of a word token.
 * Combining marks are ignored; only base letters are considered.
 */
const getWordCase = (word: string): CaseType => {
  const letters = [...word].filter(letter => isLetter(letter));
  if (!letters.length) return "lower";
  if (letters.length === 1) return isUpper(letters[0]) ? "title" : "lower";
  if (letters.every(letter => isUpper(letter))) return "upper";
  if (letters.every(letter => isLower(letter))) return "lower";
  return "title";
};

/** Applies a case pattern to a word. */
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

/**
 * Splits text into alternating word / non-word tokens.
 *   - Spreads with [...str] for correct Unicode code-point iteration.
 *   - Combining marks are attached to the current token, not split off.
 */
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
    } // keep mark inside current token
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
