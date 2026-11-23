import { Text } from "types";

export const frMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frIpaCyrlRules } = await import("data/fr/fr-ipa_cyrl.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, frIpaNgRules + frIpaCyrlRules + ipaMkRules, {
    source: frIpa,
    caseLang: "mk",
    elision: true,
  });
};
