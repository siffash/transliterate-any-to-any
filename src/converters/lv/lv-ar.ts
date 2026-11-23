import { Text } from "types";

export const lvAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, lvIpaRules + ipaArRules);
};
