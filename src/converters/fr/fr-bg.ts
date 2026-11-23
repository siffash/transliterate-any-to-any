import { Text } from "types";

export const frBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frIpaCyrlRules } = await import("data/fr/fr-ipa_cyrl.rules");
  const { frIpaBgRules } = await import("data/fr/fr-ipa_bg.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  return convertText(text, frIpaNgRules + frIpaCyrlRules + frIpaBgRules + ipaBgRules, {
    source: words => frIpa(words, { keepSchwa: true, finalIeu: true }),
    caseLang: "bg",
    elision: "'",
  });
};
