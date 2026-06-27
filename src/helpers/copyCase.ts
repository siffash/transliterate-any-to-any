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
 * • Words are sequences of Unicode letters (any script).
 * • Combining diacritical marks (Unicode category M) are kept
 *   inside the word they visually belong to, so decomposed
 *   characters like e + ◌́ (NFD) are not treated as word-breakers.
 * • Non-letter characters (punctuation, spaces, digits …) are
 *   preserved verbatim in the output.
 * • If `from` has more words than `to`, the extra case patterns
 *   are silently ignored. If `to` has more words, the extra
 *   words stay lowercase.
 * • Case classes: "lower" (word), "upper" (WORD), "title" (Word).
 *
 * Works with Latin, Cyrillic, Greek, Armenian, Georgian, and any
 * other Unicode script that has case distinctions.
 */
export const copyCase = (from: string, to: string): string => {
  const cases = tokenize(from)
    .filter((t: Token) => t.isWord)
    .map((t: Token) => getWordCase(t.text));

  let wi = 0;
  return tokenize(to)
    .map((t: Token) =>
      t.isWord ? applyCase(t.text, wi < cases.length ? cases[wi++] : "lower") : t.text,
    )
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
 */
const isMark = (ch: string): boolean => /\p{M}/u.test(ch);

/**
 * Classifies the case pattern of a word token.
 * Combining marks are ignored; only base letters are considered.
 */
const getWordCase = (word: string): CaseType => {
  const letters = [...word].filter(isLetter);
  if (!letters.length) return "lower";
  if (letters.every(isUpper)) return "upper";
  if (letters.every(isLower)) return "lower";
  if (isUpper(letters[0])) return "title";
  return "title";
};

/** Applies a case pattern to a word (`to` is assumed pre-lowercased). */
const applyCase = (word: string, type: CaseType): string => {
  if (type === "upper") return word.toUpperCase();
  if (type === "lower") return word.toLowerCase();
  let first = true;
  return [...word]
    .map(ch => {
      if (isLetter(ch) && first) {
        first = false;
        return ch.toUpperCase();
      }
      return ch.toLowerCase();
    })
    .join("");
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
    if (isMark(ch)) {
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
