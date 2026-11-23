import { Text } from "types";

export const fiHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, fiIpaRules + ipaHeRules);
};
