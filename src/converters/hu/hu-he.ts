import { Text } from "types";

export const huHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { huIpaHeRules } = await import("data/hu/hu-ipa_he.rules");

  return convertText(text, huIpaRules + huIpaHeRules + ipaHeRules);
};
