import { Text } from "types";

export const caFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { caIpaLRules } = await import("data/ca/ca-ipa_l.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(caIpaRules + caIpaLRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
