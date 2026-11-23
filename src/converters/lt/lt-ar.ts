import { Text } from "types";

export const ltAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ltIpaRules + ipaArRules);
};
