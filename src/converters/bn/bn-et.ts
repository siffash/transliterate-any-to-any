import { Text } from "types";

export const bnEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaGemTRules + ipaEtRules + "::Title;");
};
