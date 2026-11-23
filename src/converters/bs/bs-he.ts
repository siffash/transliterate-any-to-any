import { Text } from "types";

export const bsHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, bsIpaRules + ipaHeVbRules + ipaHeRules);
};
