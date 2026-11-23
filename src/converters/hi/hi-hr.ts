import { Text } from "types";

export const hiHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  return convertText(text, hiIpaRules + ipaAspHRules + ipaHrRules + "::Title;");
};
