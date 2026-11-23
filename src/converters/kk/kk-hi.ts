import { Text } from "types";

export const kkHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, kkIpaRules + ipaHiRules);
};
