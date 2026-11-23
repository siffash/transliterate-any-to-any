import { Text } from "types";

export const bsFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(text, bsIpaRules + ipaFaInitialARules + ipaFaNjRules + ipaFaRules);
};
