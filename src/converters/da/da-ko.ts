import { Text } from "types";

export const daKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { daIpaKoRules } = await import("data/da/da-ipa_ko.rules");
  const { ipaKoJeRules } = await import("data/ipa/ipa-ko_je.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    daIpaRules + daIpaRRules + daIpaKoRules + ipaKoJeRules + ipaKoFinalKpRules + ipaKoRules,
  );
};
