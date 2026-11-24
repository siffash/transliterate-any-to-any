import { Text } from "types";

export const mtKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { mtIpaDevoiceRules } = await import("data/mt/mt-ipa_devoice.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaJoinRules } = await import("data/ipa/ipa_join.rules");
  const { ipaGlottalHyphenRules } = await import("data/ipa/ipa_glottal-hyphen.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    mtIpaRules +
      mtIpaDevoiceRules +
      ipaKoFinalKpRules +
      ipaJoinRules +
      ipaGlottalHyphenRules +
      ipaKoRules,
  );
};
