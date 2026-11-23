import { Text } from "types";

export const lbFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");

  return convertText(text, ipaErRules + ipaFaInitialARules + ipaFaOeRules + ipaFaRules, {
    source: words => lbIpa(words, false, undefined, ipaDevoiceVRules),
  });
};
