import { Text } from "types";

export const caHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, caIpaRules + ipaHeRules);
};
