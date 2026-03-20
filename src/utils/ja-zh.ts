import { Text } from "types/languages";

export const jaZh = async (text: Text) => {
  const { OpenCC } = (await import("opencc")).default;
  const { jaZhMap } = await import("constants/ja-zh.map");
  const pattern = new RegExp(Object.keys(jaZhMap).join("|"), "g");

  // Kanji conversion (Japanese Shinjitai -> Simplified Chinese Hanzi)
  const jp2t = new OpenCC("jp2t.json");
  const t2s = new OpenCC("t2s.json");

  const convert = async (text: string) => {
    const traditional = await jp2t.convertPromise(text);
    const simplified = await t2s.convertPromise(traditional);
    // Transliterate remaining Kana
    return simplified.replace(pattern, match => jaZhMap[match]);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
