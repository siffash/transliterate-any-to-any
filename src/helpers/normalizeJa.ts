const ARCHAIC_KANA: Record<string, string> = {
  ゎ: "わ",
  ヮ: "ワ",
  ヷ: "ヴァ",
  ヸ: "ヴィ",
  ヹ: "ヴェ",
  ヺ: "ヴォ",
};

// Variant kanji kuromoji doesn't know, common in names (髙橋, 宮﨑, 𠮷田)
const KANJI_VARIANTS: Record<string, string> = {
  髙: "高",
  﨑: "崎",
  𠮷: "吉",
};

/*
 * Converts half-width katakana (ｶﾞｷﾞ) to full-width (ガギ), which kuromoji understands,
 * replaces variant kanji with their common form (髙橋 → 高橋),
 * and writes out the kana iteration marks it leaves as they are (みすゞ → みすず, こゝろ → こころ).
 * Archaic kana it doesn't read get their modern spelling (クヮ → クワ, ヷ → ヴァ).
 * @param text - The Japanese text.
 * @returns the text with full-width katakana and no kana iteration marks.
 */
export const normalizeJa = (text: string): string =>
  text
    .replace(/[髙﨑𠮷]/gu, kanji => KANJI_VARIANTS[kanji])
    .replace(/[｡-ﾟ]+/g, s => s.normalize("NFKC"))
    .replace(/[ゎヮヷヸヹヺ]/g, kana => ARCHAIC_KANA[kana])
    .replace(
      /([\p{scx=Hiragana}\p{scx=Katakana}])([ゝゞヽヾ])/gu,
      (_, kana: string, mark: string) => {
        const base = kana.normalize("NFD")[0];
        return kana + ("ゞヾ".includes(mark) ? (base + "\u3099").normalize("NFC") : base);
      },
    );
