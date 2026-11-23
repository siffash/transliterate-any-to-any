import { Text } from "types";

export const hiHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { hiIpaShortEoRules } = await import("data/hi/hi-ipa_short-eo.rules");
  const { hiIpaShortFinalARules } = await import("data/hi/hi-ipa_short-final-a.rules");
  const { hiIpaShortFinalIRules } = await import("data/hi/hi-ipa_short-final-i.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  return convertText(
    text,
    hiIpaRules +
      hiIpaShortEoRules +
      hiIpaShortFinalARules +
      hiIpaShortFinalIRules +
      ipaGemHuRules +
      ipaAspHRules +
      ipaHuRules +
      "::Title;",
  );
};
