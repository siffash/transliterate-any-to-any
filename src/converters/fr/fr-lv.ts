import { Text } from "types";

export const frLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");
  const { frIpaLvRules } = await import("data/fr/fr-ipa_lv.rules");

  return convertText(text, frIpaNgRules + frIpaLvRules + ipaLvRules, {
    source: frIpa,
    caseLang: "lv",
    elision: true,
  });
};
