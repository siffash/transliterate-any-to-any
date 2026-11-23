import { Text } from "types";

export const bnLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaGemRules + ipaLtRules + "::Title;");
};
