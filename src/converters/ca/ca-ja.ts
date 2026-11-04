import { Text } from "types";

export const caJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { caIpaLRules } = await import("data/ca/ca-ipa_l.rules");
  const { caIpaJaRules } = await import("data/ca/ca-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(caIpaRules + caIpaLRules + caIpaJaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
