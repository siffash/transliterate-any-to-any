import { Text } from "types";

export const bnFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaGemTRules + ipaFiRules + "::Title;");
};
