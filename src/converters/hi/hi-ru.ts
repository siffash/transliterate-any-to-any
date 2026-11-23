import { Text } from "types";

export const hiRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  return convertText(text, hiIpaRules + ipaGemDRules + ipaAspHRules + ipaRuRules + "::Title;");
};
