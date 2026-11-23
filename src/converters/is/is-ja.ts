import { Text } from "types";

export const isJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaJaRules } = await import("data/is/is-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, isIpaRules + isIpaTlRules + isIpaSpellRules + isIpaJaRules + ipaJaRules);
};
