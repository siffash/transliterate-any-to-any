import { Text } from "types";

export const bnHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaHyRules + "::Title;");
};
