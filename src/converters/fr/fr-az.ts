import { Text } from "types";

export const frAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");

  return convertText(text, frIpaNgRules + ipaAzRules, {
    source: frIpa,
    caseLang: "az",
    elision: true,
  });
};
