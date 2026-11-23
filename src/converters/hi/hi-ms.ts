import { Text } from "types";

export const hiMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaAspHRules + ipaMsRules + "::Title;");
};
