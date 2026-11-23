import { Text } from "types";

export const noKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { noIpaKoRules } = await import("data/no/no-ipa_ko.rules");
  const { ipaKoJeRules } = await import("data/ipa/ipa-ko_je.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    noIpaRules + svNoIpaRRules + noIpaKoRules + ipaKoJeRules + ipaKoFinalKpRules + ipaKoRules,
  );
};
