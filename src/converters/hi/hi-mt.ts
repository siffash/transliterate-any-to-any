import { Text } from "types";

export const hiMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, hiIpaRules + ipaAspHRules + ipaMtRules + "::Title;");
};
