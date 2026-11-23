import { Text } from "types";

export const ltFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");

  return convertText(text, ltIpaRules + ipaFaInitialARules + ipaFaRules);
};
