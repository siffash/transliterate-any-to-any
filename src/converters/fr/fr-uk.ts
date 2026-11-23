import { Text } from "types";

export const frUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frIpaCyrlRules } = await import("data/fr/fr-ipa_cyrl.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { frCyrlRlRules } = await import("data/fr/fr-cyrl_rl.rules");

  return convertText(text, frIpaNgRules + frIpaCyrlRules + ipaUkRules + ukLRules + frCyrlRlRules, {
    source: words => frIpa(words, { spelledEy: true, doubleConsonants: "final" }),
    caseLang: "uk",
    elision: "'",
  });
};
