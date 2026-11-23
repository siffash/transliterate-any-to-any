import { Text } from "types";

export const faJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaTSplitRules } = await import("data/ipa/ipa_t-split.rules");

  return convertText(text, faIpaARules + ipaTSplitRules + ipaJaRules + "::Title;", {
    source: faIpa,
  });
};
