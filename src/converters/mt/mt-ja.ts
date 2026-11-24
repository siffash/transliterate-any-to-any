import { Text } from "types";

export const mtJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaGlottalHyphenRules } = await import("data/ipa/ipa_glottal-hyphen.rules");
  const { ipaJoinRules } = await import("data/ipa/ipa_join.rules");

  return convertText(text, mtIpaRules + ipaJoinRules + ipaGlottalHyphenRules + ipaJaRules);
};
