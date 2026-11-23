import { Text } from "types";

export const frCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  return convertText(text, frIpaNgRules + ipaCsRules, {
    source: frIpa,
    caseLang: "cs",
    elision: true,
  });
};
