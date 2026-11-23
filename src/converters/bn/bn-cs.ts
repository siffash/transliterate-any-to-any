import { Text } from "types";

export const bnCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaGemDRules + ipaCsRules + "::Title;");
};
