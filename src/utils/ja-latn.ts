import { Text } from "types/languages";

export const jaLatn = async (text: Text, latin_ASCII: boolean) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());

  const convert = async (text: string) => {
    let result = await kuroshiro.convert(text, { to: "romaji" });

    if (latin_ASCII) {
      const { RBT } = await import("icu-transliterator");
      const { latnAsciiRules } = await import("constants/latn-ascii.rules");
      const transliterator = RBT.fromRules(latnAsciiRules);
      result = transliterator.transliterate(result);
    }

    return result;
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
