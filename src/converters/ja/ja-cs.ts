import { Text } from "types";

export const jaCs = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { jaIpaRules } = await import("data/ja-ipa.rules");
  const { ipaCsRules } = await import("data/ipa-cs.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(jaIpaRules + ipaCsRules + "::Title;");

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
