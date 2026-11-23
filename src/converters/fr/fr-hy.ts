import { Text } from "types";

export const frHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { frIpaHyRules } = await import("data/fr/fr-ipa_hy.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, frIpaNgRules + frHeIpaRRules + frIpaHyRules + ipaHyRules + hyEvRules, {
    source: words => frIpa(words, { finalIeu: true }),
    caseLang: "hy",
    elision: "'",
  });
};
