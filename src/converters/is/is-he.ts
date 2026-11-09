import { Text } from "types";

export const isHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(
    isIpaRules + isIpaTlRules + isIpaSpellRules + isIpaAuRules + ipaHeRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
