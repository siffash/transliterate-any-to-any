import { Text } from "types";

export const frNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNlRules } = await import("data/fr/fr-ipa_nl.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  return convertText(text, frIpaNlRules + ipaNlRules, {
    source: frIpa,
    caseLang: "nl",
    elision: true,
  });
};
