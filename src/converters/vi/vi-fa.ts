import { Text } from "types";

export const viFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
