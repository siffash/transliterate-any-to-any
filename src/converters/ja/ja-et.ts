import { Text } from "types";

export const jaEt = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { jaIpaRules } = await import("constants/ja-ipa.rules");
  const { ipaEtRules } = await import("constants/ipa-et.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(jaIpaRules + ipaEtRules + "::Title;");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ja", async text =>
      toIPA(await kuroshiro.convert(text, { to: "hiragana" })),
    );
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
