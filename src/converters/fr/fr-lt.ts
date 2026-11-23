import { Text } from "types";

export const frLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");
  const { frIpaLtRules } = await import("data/fr/fr-ipa_lt.rules");
  const { latnHyphenSpaceRules } = await import("data/latn/latn_hyphen-space.rules");

  return convertText(text, frIpaNgRules + frIpaLtRules + ipaLtRules + latnHyphenSpaceRules, {
    source: frIpa,
    caseLang: "lt",
    elision: true,
  });
};
