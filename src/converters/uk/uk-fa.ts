import { Text } from "types";

export const ukFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, ukIpaRules + ipaFaInitialARules + ipaFaRules);
};
