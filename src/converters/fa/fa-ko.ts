import { Text } from "types";

export const faKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");
  const { ipaTSplitRules } = await import("data/ipa/ipa_t-split.rules");

  return convertText(
    text,
    faIpaARules + ipaTSplitRules + ipaKoFinalKpRules + ipaKoRules + "::Title;",
    { source: faIpa },
  );
};
