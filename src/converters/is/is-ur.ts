import { Text } from "types";

export const isUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaARules } = await import("data/is/is-ipa_a.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, isIpaRules + isIpaSpellRules + isIpaARules + isIpaAuRules + ipaUrRules);
};
