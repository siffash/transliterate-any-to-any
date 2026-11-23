import { Text } from "types";

export const frSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");
  const { latnHyphenSpaceRules } = await import("data/latn/latn_hyphen-space.rules");

  return convertText(text, frIpaNgRules + ipaSrRules + latnHyphenSpaceRules, {
    source: words => frIpa(words, { oiO: true }),
    caseLang: "sr",
    elision: true,
  });
};
