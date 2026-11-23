import { Text } from "types";

export const hiMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, hiIpaRules + ipaAspHRules + ipaMkRules + "::Title;");
};
