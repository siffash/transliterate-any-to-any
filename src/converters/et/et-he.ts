import { Text } from "types";

export const etHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, etIpaRules + ipaHeRules);
};
