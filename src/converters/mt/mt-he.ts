import { Text } from "types";

export const mtHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, mtIpaRules + ipaHeRules);
};
