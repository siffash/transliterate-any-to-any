import { Text } from "types";

export const daHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, daIpaRules + daIpaRRules + ipaHeRules);
};
