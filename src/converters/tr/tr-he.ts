import { Text } from "types";

export const trHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaHeIRules } = await import("data/ipa/ipa-he_i.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, trIpaRules + ipaHeIRules + ipaHeRules);
};
