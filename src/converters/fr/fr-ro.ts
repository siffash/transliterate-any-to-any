import { Text } from "types";

export const frRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");

  return convertText(text, frIpaNgRules + ipaRoRules, {
    source: frIpa,
    caseLang: "ro",
    elision: true,
  });
};
