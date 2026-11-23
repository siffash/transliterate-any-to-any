import { Text } from "types";

export const bnNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaGemRules + ipaNlRules + "::Title;");
};
