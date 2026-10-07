import { Text } from "types";

export const viTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
