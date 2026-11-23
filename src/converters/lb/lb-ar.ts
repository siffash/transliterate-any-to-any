import { Text } from "types";

export const lbAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaArERules } = await import("data/ipa/ipa-ar_e.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ipaErRules + ipaArERules + ipaArRules, { source: lbIpa });
};
