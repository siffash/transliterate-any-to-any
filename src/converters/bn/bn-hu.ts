import { Text } from "types";

export const bnHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaGemHuRules + ipaHuRules + "::Title;");
};
