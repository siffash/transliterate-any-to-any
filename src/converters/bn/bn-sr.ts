import { Text } from "types";

export const bnSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaSrRules + "::Title;");
};
