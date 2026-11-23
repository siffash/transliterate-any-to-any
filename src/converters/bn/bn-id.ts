import { Text } from "types";

export const bnId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaIdRules + "::Title;");
};
