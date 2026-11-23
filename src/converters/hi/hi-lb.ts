import { Text } from "types";

export const hiLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaAspHRules + ipaLbRules + "::Title;");
};
