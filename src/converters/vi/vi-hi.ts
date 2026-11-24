import { Text } from "types";

export const viHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, viIpaRules + ipaHiORules + ipaHiRules);
};
