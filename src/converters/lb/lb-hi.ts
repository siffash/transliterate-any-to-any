import { Text } from "types";

export const lbHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, ipaErRules + ipaFinalSchwaERules + ipaHiLongARules + ipaHiRules, {
    source: lbIpa,
  });
};
