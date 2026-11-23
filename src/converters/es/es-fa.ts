import { Text } from "types";

export const esFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(
    text,
    esIpaZRules + esIpaRules + ipaWURules + ipaFaInitialARules + ipaFaNjRules + ipaFaRules,
  );
};
