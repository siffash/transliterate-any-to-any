/*
 * Converts half-width katakana (ｶﾞｷﾞ) to full-width (ガギ), which kuromoji understands.
 * @param text - The Japanese text.
 * @returns the text with full-width katakana.
 */
export const normalizeJa = (text: string): string =>
  text.replace(/[｡-ﾟ]+/g, s => s.normalize("NFKC"));
