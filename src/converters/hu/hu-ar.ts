import { Text } from "types";

export const huAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, huIpaRules + ipaArRules);
};
