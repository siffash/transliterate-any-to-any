import { Text } from "types";

export const bnMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaMkRules + "::Title;");
};
