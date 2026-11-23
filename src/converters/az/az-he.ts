import { Text } from "types";

export const azHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaHeIRules } = await import("data/ipa/ipa-he_i.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, azIpaRules + ipaHeIRules + ipaHeRules);
};
