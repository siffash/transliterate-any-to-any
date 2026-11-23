import { Text } from "types";

export const bgFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { bgIpaFaRules } = await import("data/bg/bg-ipa_fa.rules");
  const { bgFaOvoRules } = await import("data/bg/bg-fa_ovo.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(
    text,
    bgIpaRules + bgIpaFaRules + ipaFaInitialARules + ipaFaRules + bgFaOvoRules,
  );
};
