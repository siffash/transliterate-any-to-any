import { Text } from "types";

export const bnSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaGemRules + ipaSlRules + "::Title;");
};
