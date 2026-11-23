import { Text } from "types";

export const nlZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { nlIpaZhRules } = await import("data/nl/nl-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, nlIpaRules + nlIpaZhRules + ipaZhRules);
};
