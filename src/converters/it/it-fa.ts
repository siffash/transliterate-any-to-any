import { Text } from "types";

export const itFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { itIpaFaRules } = await import("data/it/it-ipa_fa.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(
    text,
    itIpaRules + itIpaFaRules + ipaWURules + ipaFaInitialARules + ipaFaNjRules + ipaFaRules,
  );
};
