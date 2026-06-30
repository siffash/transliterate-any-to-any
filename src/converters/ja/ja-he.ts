import { Text } from "types";

export const jaHe = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(ipaHeRules);

  const convert = async (text: string) => {
    const hiragana = await kuroshiro.convert(text, { to: "hiragana" });
    const ipa = toIPA(hiragana, { anyAscii: true });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
