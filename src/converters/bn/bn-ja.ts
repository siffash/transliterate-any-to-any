import { Text } from "types";

export const bnJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaJaNgRules } = await import("data/ipa/ipa-ja_ng.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaJaNgRules + ipaJaRules);
};
