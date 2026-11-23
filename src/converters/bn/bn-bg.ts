import { Text } from "types";

export const bnBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaGemRules + ipaBgRules + "::Title;");
};
