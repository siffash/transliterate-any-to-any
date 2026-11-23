import { Text } from "types";

export const svAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { daNoSvIpaArRules } = await import("data/ipa/da_no_sv-ipa_ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, svIpaRules + svNoIpaRRules + daNoSvIpaArRules + ipaArRules);
};
