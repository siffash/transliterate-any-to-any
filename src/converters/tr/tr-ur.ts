import { Text } from "types";

export const trUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUnroundedIRules } = await import("data/ipa/ipa_unrounded-i.rules");
  const { trLatnGhRules } = await import("data/tr/tr-latn_gh.rules");
  const { ipaArEDropRules } = await import("data/ipa/ipa-ar_e-drop.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");

  return convertText(
    text,
    trLatnGhRules +
      trIpaRules +
      ipaUnroundedIRules +
      ipaArEDropRules +
      ipaUrInitialARules +
      ipaUrRules,
  );
};
