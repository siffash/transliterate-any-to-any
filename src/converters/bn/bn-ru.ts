import { Text } from "types";

export const bnRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaGemDRules + ipaRuRules + "::Title;");
};
