import { Text } from "types";

export const hiBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaAspHRules + ipaBgRules + "::Title;");
};
