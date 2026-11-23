import { Text } from "types";

export const svFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { ipaFaYRules } = await import("data/ipa/ipa-fa_y.rules");

  return convertText(text, svIpaRules + svNoIpaRRules + ipaFaOeRules + ipaFaYRules + ipaFaRules);
};
