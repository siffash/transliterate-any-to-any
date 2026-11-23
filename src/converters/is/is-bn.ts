import { Text } from "types";

export const isBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, isIpaRules + isIpaTlRules + isIpaSpellRules + ipaBnRules);
};
