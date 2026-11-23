import { Text } from "types";

export const hiEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  return convertText(text, hiIpaRules + ipaGemTRules + ipaAspHRules + ipaEtRules + "::Title;");
};
