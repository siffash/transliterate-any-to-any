import { Text } from "types";

export const viHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, viIpaRules + ipaHeRules);
};
