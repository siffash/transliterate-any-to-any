import { Text } from "types";

export const trFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaUnroundedIRules } = await import("data/ipa/ipa_unrounded-i.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { trLatnGhRules } = await import("data/tr/tr-latn_gh.rules");

  return convertText(
    text,
    trLatnGhRules +
      trIpaRules +
      ipaUnroundedIRules +
      ipaFaInitialARules +
      ipaFaOeRules +
      ipaFaRules,
  );
};
