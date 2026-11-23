import { Text } from "types";

export const fiAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, fiIpaRules + ipaArRules);
};
