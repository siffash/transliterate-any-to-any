import { Text } from "types";

export const isUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaARules } = await import("data/is/is-ipa_a.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(
    isIpaRules + isIpaSpellRules + isIpaARules + isIpaAuRules + ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
