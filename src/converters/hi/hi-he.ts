import { Text } from "types";

export const hiHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaHeRules);
};
