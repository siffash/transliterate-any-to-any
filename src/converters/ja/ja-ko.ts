import { Text } from "types";

export const jaKo = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { default: Hangul } = await import("hangul-js");
  const { jaKoMap } = await import("constants/ja-ko.map");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const sortedKeys = Object.keys(jaKoMap).sort((a, b) => b.length - a.length);
  const jaKoPattern = new RegExp(sortedKeys.join("|"), "g");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());

  const convert = async (text: string) => {
    // Get the Japanese phonetic reading (Mandatory for Korean)
    const hiragana = await wordSplitter(
      text,
      "ja",
      async text => await kuroshiro.convert(text, { to: "hiragana" }),
      true,
    );
    // Map Hiragana to Korean Jamo (Individual pieces)
    const jamo = hiragana.replace(jaKoPattern, match => jaKoMap[match]);
    // Assemble Jamo into proper Hangul blocks
    return Hangul.assemble(jamo.split(""));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
