import { Text } from "types";

export const hiCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { hiIpaShortFinalARules } = await import("data/hi/hi-ipa_short-final-a.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  return convertText(
    text,
    hiIpaRules + hiIpaShortFinalARules + ipaGemDRules + ipaAspHRules + ipaCsRules + "::Title;",
  );
};
