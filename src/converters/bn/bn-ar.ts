import { Text } from "types";

export const bnAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { bnIpaArRules } = await import("data/bn/bn-ipa_ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + bnIpaArRules + ipaArRules);
};
