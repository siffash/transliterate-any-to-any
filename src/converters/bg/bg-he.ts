import { Text } from "types";

export const bgHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, bgIpaRules + ipaHeVbRules + ipaHeXRules + ipaHeRules);
};
