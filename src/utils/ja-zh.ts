export const jaZh = async (text: string) => {
  const { OpenCC } = (await import("opencc")).default;
  const { jaZhMap } = await import("constants/ja-zh.map");

  // Kanji conversion (Japanese Shinjitai -> Simplified Chinese Hanzi)
  const jp2t = new OpenCC("jp2t.json");
  const t2s = new OpenCC("t2s.json");
  const traditional = await jp2t.convertPromise(text);
  const simplified = await t2s.convertPromise(traditional);

  // Transliterate remaining Kana
  const pattern = new RegExp(Object.keys(jaZhMap).join("|"), "g");
  return simplified.replace(pattern, match => jaZhMap[match]);
};
