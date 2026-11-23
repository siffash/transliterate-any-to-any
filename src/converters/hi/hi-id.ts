import { Text } from "types";

export const hiId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, hiIpaRules + ipaAspHRules + ipaIdRules + "::Title;");
};
