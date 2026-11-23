import { Text } from "types";

export const lbUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, ipaErRules + ipaFinalSchwaERules + ipaUrRules, {
    source: words => lbIpa(words, false, undefined, ipaDevoiceVRules),
  });
};
