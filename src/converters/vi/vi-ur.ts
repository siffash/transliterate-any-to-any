import { Text } from "types";

export const viUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
