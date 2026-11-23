import { Text } from "types";

export const noAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { daNoSvIpaArRules } = await import("data/ipa/da_no_sv-ipa_ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaArEDropRules } = await import("data/ipa/ipa-ar_e-drop.rules");

  return convertText(
    text,
    noIpaRules + svNoIpaRRules + daNoSvIpaArRules + ipaArEDropRules + ipaArRules,
  );
};
