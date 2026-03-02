export const jaKo = async (text: string) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { default: Hangul } = await import("hangul-js");
  const { jaKoMap } = await import("constants/ja-ko.map");

  // Get the Japanese phonetic reading (Mandatory for Korean)
  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const hiragana = await kuroshiro.convert(text, { to: "hiragana" });

  // Map Hiragana to Korean Jamo (Individual pieces)
  const jaKoPattern = new RegExp(Object.keys(jaKoMap).join("|"), "g");
  const jamo = hiragana.replace(jaKoPattern, match => jaKoMap[match]);

  // Assemble Jamo into proper Hangul blocks
  return Hangul.assemble(jamo.split(""));
};
