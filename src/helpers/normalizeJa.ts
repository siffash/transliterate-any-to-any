const ARCHAIC_KANA: Record<string, string> = {
  ゎ: "わ",
  ヮ: "ワ",
  ヷ: "ヴァ",
  ヸ: "ヴィ",
  ヹ: "ヴェ",
  ヺ: "ヴォ",
};

/*
 * Converts half-width katakana (ｶﾞｷﾞ) to full-width (ガギ), which kuromoji understands,
 * and writes out the kana iteration marks it leaves as they are (みすゞ → みすず, こゝろ → こころ).
 * Archaic kana it doesn't read get their modern spelling (クヮ → クワ, ヷ → ヴァ).
 * @param text - The Japanese text.
 * @returns the text with full-width katakana and no kana iteration marks.
 */
export const normalizeJa = (text: string): string =>
  text
    .replace(/[｡-ﾟ]+/g, s => s.normalize("NFKC"))
    .replace(/[ゎヮヷヸヹヺ]/g, kana => ARCHAIC_KANA[kana])
    .replace(
      /([\p{scx=Hiragana}\p{scx=Katakana}])([ゝゞヽヾ])/gu,
      (_, kana: string, mark: string) => {
        const base = kana.normalize("NFD")[0];
        return kana + ("ゞヾ".includes(mark) ? (base + "\u3099").normalize("NFC") : base);
      },
    );
