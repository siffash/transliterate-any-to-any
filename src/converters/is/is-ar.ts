import { Text } from "types";

export const isAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaARules } = await import("data/is/is-ipa_a.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, isIpaRules + isIpaSpellRules + isIpaARules + isIpaAuRules + ipaArRules);
};
