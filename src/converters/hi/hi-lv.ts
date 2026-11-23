import { Text } from "types";

export const hiLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaShortEoRules } = await import("data/hi/hi-ipa_short-eo.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  return convertText(text, hiIpaRules + hiIpaShortEoRules + ipaAspHRules + ipaLvRules + "::Title;");
};
