import { Text } from "types";

export const huFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
