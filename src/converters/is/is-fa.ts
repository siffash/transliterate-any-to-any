import { Text } from "types";

export const isFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaTlRules } = await import("data/is/is-ipa_tl.rules");
  const { isIpaSpellRules } = await import("data/is/is-ipa_spell.rules");
  const { isIpaARules } = await import("data/is/is-ipa_a.rules");
  const { isIpaAuRules } = await import("data/is/is-ipa_au.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");

  return convertText(
    text,
    isIpaRules +
      isIpaTlRules +
      isIpaSpellRules +
      isIpaARules +
      isIpaAuRules +
      ipaFaInitialARules +
      ipaFaOeRules +
      ipaFaRules,
  );
};
