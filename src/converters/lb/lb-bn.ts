import { Text } from "types";

export const lbBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, ipaErRules + ipaFinalSchwaERules + ipaBnRules, { source: lbIpa });
};
