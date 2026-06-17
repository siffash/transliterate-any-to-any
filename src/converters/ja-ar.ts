import { Text } from "types";

export const jaAr = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { phonemize } = await import("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(ipaArRules);

  const convert = async (text: string) => {
    const hiragana = await kuroshiro.convert(text, { to: "hiragana" });
    const ipa = phonemize(hiragana, { anyAscii: true });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
