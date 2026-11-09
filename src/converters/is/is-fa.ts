import { Text } from "types";

export const isFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaARules } = await import("data/is/is-ipa_a.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(
    isIpaRules + isIpaTlRules + isIpaSpellRules + isIpaARules + isIpaAuRules + ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
