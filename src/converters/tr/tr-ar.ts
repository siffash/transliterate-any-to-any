import { Text } from "types";

export const trAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaUnroundedIRules } = await import("data/ipa/ipa_unrounded-i.rules");
  const { ipaArEDropRules } = await import("data/ipa/ipa-ar_e-drop.rules");
  const { trLatnGhRules } = await import("data/tr/tr-latn_gh.rules");

  return convertText(
    text,
    trLatnGhRules + trIpaRules + ipaUnroundedIRules + ipaArEDropRules + ipaArRules,
  );
};
