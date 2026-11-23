import { Text } from "types";

export const bnSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaGemDRules + ipaSkRules + "::Title;");
};
