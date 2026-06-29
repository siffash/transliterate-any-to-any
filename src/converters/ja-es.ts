import { Text } from "types";

export const jaEs = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaEsRules } = await import("constants/ipa-es.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(ipaEsRules + "::Title;");

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
