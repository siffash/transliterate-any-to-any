import { Text } from "types";

export const roHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, roIpaRules + ipaHeRules);
};
