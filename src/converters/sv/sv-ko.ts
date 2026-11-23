import { Text } from "types";

export const svKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { svIpaKoRules } = await import("data/sv/sv-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    svIpaRules + svNoIpaRRules + svIpaKoRules + ipaKoFinalKpRules + ipaKoRules,
  );
};
