import { Text } from "types";

export const sqHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, sqIpaRules + ipaHeRules);
};
