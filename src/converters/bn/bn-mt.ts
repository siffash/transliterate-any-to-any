import { Text } from "types";

export const bnMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaMtRules + "::Title;");
};
