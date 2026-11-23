import { Text } from "types";

export const slHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, slIpaRules + ipaHeVbRules + ipaHeRules);
};
