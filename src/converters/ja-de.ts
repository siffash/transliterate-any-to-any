import { Text } from "types";

export const jaDe = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaDeRules } = await import("constants/ipa-de.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(ipaDeRules + "::Title;");

  const convert = async (text: string) => {
    const split = wordSplitter(text, "ja");
    const hiragana = await kuroshiro.convert(split, { to: "hiragana" });
    const ipa = toIPA(hiragana, { anyAscii: true });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
