import { Text } from "types";

export const hiEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaEsRules + "::Title;");
};
