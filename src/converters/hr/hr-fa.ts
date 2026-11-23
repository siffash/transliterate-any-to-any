import { Text } from "types";

export const hrFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");
  const { ipaFaODropRules } = await import("data/ipa/ipa-fa_o-drop.rules");

  return convertText(
    text,
    hrIpaRules + ipaFaInitialARules + ipaFaNjRules + ipaFaODropRules + ipaFaRules,
  );
};
