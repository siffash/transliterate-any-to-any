import { Text } from "types";

export const sqJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, sqIpaRules + ipaJaRules);
};
