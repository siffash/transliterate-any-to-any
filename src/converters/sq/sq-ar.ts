import { Text } from "types";

export const sqAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, sqIpaRules + ipaArRules);
};
