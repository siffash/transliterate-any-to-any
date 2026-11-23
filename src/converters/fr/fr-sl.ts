import { Text } from "types";

export const frSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  return convertText(text, frIpaNgRules + ipaSlRules, {
    source: frIpa,
    caseLang: "sl",
    elision: true,
  });
};
