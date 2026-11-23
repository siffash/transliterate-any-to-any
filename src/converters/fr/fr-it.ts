import { Text } from "types";

export const frIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  return convertText(text, frIpaNgRules + ipaItRules, {
    source: frIpa,
    caseLang: "it",
    elision: true,
  });
};
