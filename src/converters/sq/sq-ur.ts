import { Text } from "types";

export const sqUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, sqIpaRules + ipaUrRules);
};
