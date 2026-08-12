import { Text } from "types";

export const jaZh = async (text: Text) => {
  const OpenCC = await import("opencc-js");
  const { jaZhMap } = await import("data/ja-zh.map");

  const sortedKeys = Object.keys(jaZhMap).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(sortedKeys.join("|"), "g");

  // Kanji conversion (Japanese Shinjitai -> Simplified Chinese Hanzi)
  const jp2s = OpenCC.Converter({ from: "jp", to: "cn" });

  const convert = (text: string) => {
    const simplified = jp2s(text);
    // Transliterate remaining Kana
    return simplified.replace(pattern, match => jaZhMap[match]);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
