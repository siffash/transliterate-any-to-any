import { Text } from "types";

export const hiSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, hiIpaRules + ipaGemDRules + ipaAspHRules + ipaSkRules + "::Title;");
};
