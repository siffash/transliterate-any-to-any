import { Text } from "types";

export const hiAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaArRules } = await import("data/hi/hi-ipa_ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, hiIpaRules + ipaGemRules + hiIpaArRules + ipaArRules);
};
