import { Text } from "types";

export const bnPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaPlRules + "::Title;");
};
