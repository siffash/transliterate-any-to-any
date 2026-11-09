import { Text } from "types";

export const isBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(isIpaRules + isIpaTlRules + isIpaSpellRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
