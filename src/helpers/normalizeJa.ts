const ARCHAIC_KANA: Record<string, string> = {
  ゎ: "わ",
  ヮ: "ワ",
  ヷ: "ヴァ",
  ヸ: "ヴィ",
  ヹ: "ヴェ",
  ヺ: "ヴォ",
};

const KANJI_VARIANTS: Record<string, string> = {
  髙: "高",
  﨑: "崎",
  𠮷: "吉",
  濵: "浜",
  邉: "辺",
  亞: "亜",
  郞: "郎",
  經: "経",
  將: "将",
  剱: "剣",
  凜: "凛",
  來: "来",
};

export const normalizeJa = (text: string): string =>
  text
    .replace(/[髙﨑𠮷濵邉亞郞經將剱凜來]/gu, kanji => KANJI_VARIANTS[kanji])
    .replace(/[｡-ﾟ]+/g, s => s.normalize("NFKC"))
    .replace(/[ゎヮヷヸヹヺ]/g, kana => ARCHAIC_KANA[kana])
    .replace(
      /([\p{scx=Hiragana}\p{scx=Katakana}])([ゝゞヽヾ])/gu,
      (_, kana: string, mark: string) => {
        const base = kana.normalize("NFD")[0];
        return kana + ("ゞヾ".includes(mark) ? (base + "\u3099").normalize("NFC") : base);
      },
    );
