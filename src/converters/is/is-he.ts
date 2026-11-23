import { Text } from "types";

export const isHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, isIpaRules + isIpaTlRules + isIpaSpellRules + isIpaAuRules + ipaHeRules);
};
