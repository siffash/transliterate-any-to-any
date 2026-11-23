import { Text } from "types";

export const etFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");

  return convertText(text, etIpaRules + ipaFaOeRules + ipaFaRules);
};
