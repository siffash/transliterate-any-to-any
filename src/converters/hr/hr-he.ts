import { Text } from "types";

export const hrHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, hrIpaRules + ipaHeVbRules + ipaHeRules);
};
