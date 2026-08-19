import { Text } from "types";

export const viHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
