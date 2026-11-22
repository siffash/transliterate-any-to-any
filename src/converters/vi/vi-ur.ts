import { Text } from "types";

export const viUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { viIpaUrRules } = await import("data/vi/vi-ipa_ur.rules");

  const transliterator = RBT.fromRules(viIpaRules + viIpaUrRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
