import { Text } from "types";

export const viJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
