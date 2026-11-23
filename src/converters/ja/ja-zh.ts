import { Text } from "types";

export const jaZh = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const OpenCC = await import("opencc-js");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaZhMap, jaZhKanjiMap } = await import("data/ja/ja-zh.map");

  const sortedKeys = Object.keys(jaZhMap).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(sortedKeys.join("|"), "g");

  const jp2s = OpenCC.Converter({ from: "jp", to: "cn" });

  const convert = (text: string) => {
    const simplified = jp2s(normalizeJa(text))
      .replace(/(\p{scx=Han})々/gu, "$1$1")
      .replace(/[戸郞氷騨鄕]/g, kanji => jaZhKanjiMap[kanji]!);
    const joined = simplified
      .replace(/(?<=\p{sc=Han})[ヶヵケ](?=\p{sc=Han})/gu, "")
      .replace(/(?<=\p{sc=Han})[のノ](?=\p{sc=Han})/gu, "之");
    return joined.replace(/ー(?=[ンん])/g, "").replace(pattern, match => jaZhMap[match]);
  };

  return mapText(text, convert);
};
