import { Text } from "types";

export const sqFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, sqIpaRules + ipaFaRules);
};
