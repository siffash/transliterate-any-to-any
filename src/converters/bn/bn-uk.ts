import { Text } from "types";

export const bnUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaGemDRules + ipaUkRules + "::Title;");
};
