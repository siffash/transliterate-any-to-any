import { Text } from "types";

export const hiKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaKoRules);
};
