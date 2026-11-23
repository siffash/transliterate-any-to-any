import { Text } from "types";

export const bnIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaItRules + "::Title;");
};
