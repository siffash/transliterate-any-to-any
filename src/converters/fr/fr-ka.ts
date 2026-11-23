import { Text } from "types";

export const frKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  return convertText(text, frIpaNgRules + frHeIpaRRules + ipaKaRules, { source: frIpa });
};
