import { Text } from "types";

export const jaZh = async (text: Text) => {
  const OpenCC = await import("opencc-js");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaZhMap } = await import("data/ja/ja-zh.map");

  const sortedKeys = Object.keys(jaZhMap).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(sortedKeys.join("|"), "g");

  // Kanji conversion (Japanese Shinjitai -> Simplified Chinese Hanzi)
  const jp2s = OpenCC.Converter({ from: "jp", to: "cn" });

  const convert = (text: string) => {
    // Chinese writes the kanji iteration mark out (佐々木 → 佐佐木)
    const simplified = jp2s(normalizeJa(text)).replace(/(\p{scx=Han})々/gu, "$1$1");
    // and drops the counter ヶ/ケ between kanji (茅ヶ崎 → 茅崎, 鎌ケ谷 → 镰谷)
    const joined = simplified.replace(/(?<=\p{sc=Han})[ヶヵケ](?=\p{sc=Han})/gu, "");
    // Transliterate remaining Kana
    return joined.replace(/ー(?=[ンん])/g, "").replace(pattern, match => jaZhMap[match]);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
