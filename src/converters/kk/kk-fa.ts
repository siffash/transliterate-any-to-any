import { Text } from "types";

export const kkFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
