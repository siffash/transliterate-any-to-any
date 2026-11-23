import { Text } from "types";

export const noFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { noIpaOyRules } = await import("data/no/no-ipa_oy.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { ipaFaYRules } = await import("data/ipa/ipa-fa_y.rules");

  return convertText(
    text,
    noIpaRules + svNoIpaRRules + noIpaOyRules + ipaFaOeRules + ipaFaYRules + ipaFaRules,
  );
};
