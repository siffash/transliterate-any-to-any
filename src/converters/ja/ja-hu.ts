import { Text } from "types";

export const jaHu = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { jaIpaRules } = await import("data/ja-ipa.rules");
  const { ipaHuRules } = await import("data/ipa-hu.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(jaIpaRules + ipaHuRules + "::Title;");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ja", async text =>
      filterIpa(toIPA(await kuroshiro.convert(text, { to: "hiragana" }))),
    );
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
