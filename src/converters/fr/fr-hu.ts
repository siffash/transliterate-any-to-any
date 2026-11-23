import { Text } from "types";

export const frHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  return convertText(text, frIpaNgRules + ipaHuRules, {
    source: frIpa,
    caseLang: "hu",
    elision: true,
  });
};
