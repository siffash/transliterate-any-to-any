import { Text } from "types";

export const isHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, isIpaRules + isIpaSpellRules + ipaHiLongARules + ipaHiRules);
};
