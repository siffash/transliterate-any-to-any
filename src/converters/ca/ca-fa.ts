import { Text } from "types";

export const caFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { caIpaFaRules } = await import("data/ca/ca-ipa_fa.rules");
  const { caIpaXRules } = await import("data/ca/ca-ipa_x.rules");
  const { caLatnSantRules } = await import("data/ca/ca-latn_sant.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");
  const { ipaFaODropRules } = await import("data/ipa/ipa-fa_o-drop.rules");
  const { ipaLlJRules } = await import("data/ipa/ipa_ll-j.rules");

  return convertText(
    text,
    caLatnSantRules +
      caIpaRules +
      caIpaFaRules +
      caIpaXRules +
      ipaFaInitialARules +
      ipaFaNjRules +
      ipaFaODropRules +
      ipaLlJRules +
      ipaFaRules,
  );
};
