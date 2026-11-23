import { Text } from "types";

export const hiHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { hiIpaHyRules } = await import("data/hi/hi-ipa_hy.rules");

  return convertText(text, hiIpaRules + hiIpaHyRules + ipaHyRules + "::Title;");
};
