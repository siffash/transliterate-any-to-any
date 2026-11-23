import { Text } from "types";

export const mkAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, mkIpaRules + ipaArRules);
};
