import { Text } from "types";

export const viAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, viIpaRules + ipaArRules);
};
