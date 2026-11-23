import { Text } from "types";

export const bnSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaSqRules + "::Title;");
};
