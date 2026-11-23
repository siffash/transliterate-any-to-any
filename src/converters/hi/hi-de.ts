import { Text } from "types";

export const hiDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  return convertText(text, hiIpaRules + ipaAspHRules + ipaDeRules + "::Title;");
};
