import { Text } from "types";

export const bsAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, bsIpaRules + ipaArRules);
};
