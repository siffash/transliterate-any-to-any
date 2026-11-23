import { Text } from "types";

export const fiFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");

  return convertText(text, fiIpaRules + ipaFaOeRules + ipaFaRules);
};
