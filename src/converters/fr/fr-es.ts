import { Text } from "types";

export const frEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  return convertText(text, frIpaNgRules + ipaEsRules, {
    source: words => frIpa(words, { doubleR: true }),
    caseLang: "es",
    elision: true,
  });
};
