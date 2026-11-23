import { Text } from "types";

export const frPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  return convertText(text, frIpaNgRules + ipaPlRules, {
    source: frIpa,
    caseLang: "pl",
    elision: true,
  });
};
