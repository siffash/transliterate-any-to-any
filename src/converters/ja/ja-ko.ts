import { Text } from "types";

export const jaKo = async (text: Text) => {
  const { default: Hangul } = await import("hangul-js");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaKoMap } = await import("data/ja/ja-ko.map");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const sortedKeys = Object.keys(jaKoMap).sort((a, b) => b.length - a.length);
  const jaKoPattern = new RegExp(sortedKeys.join("|"), "g");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const convert = async (text: string) => {
    // Get the Japanese phonetic reading (Mandatory for Korean)
    const hiragana = await wordSplitter(
      normalizeJa(text),
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
