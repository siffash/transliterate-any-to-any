import { Text } from "types";

export const sqZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, sqLatnFinalERules + sqIpaRules + ipaZhOvaRules + ipaZhRules);
};
