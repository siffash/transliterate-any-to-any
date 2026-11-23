import { Text } from "types";

export const lvFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { lvIpaFaRules } = await import("data/lv/lv-ipa_fa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");

  return convertText(text, lvIpaRules + lvIpaFaRules + ipaFaInitialARules + ipaFaRules);
};
