import { Text } from "types";

export const frPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  return convertText(text, frIpaNgRules + ipaPtRules, {
    source: words => frIpa(words, { doubleR: true }),
    caseLang: "pt",
    elision: true,
  });
};
