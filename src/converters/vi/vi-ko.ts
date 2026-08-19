import { Text } from "types";

export const viKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
