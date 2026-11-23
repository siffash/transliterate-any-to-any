import { Text } from "types";

export const mkHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, mkIpaRules + ipaHeVbRules + ipaHeXRules + ipaHeRules);
};
