import { Text } from "types";

export const frEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frLatnElAiRules } = await import("data/fr/fr-latn_el-ai.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  const prepassTransliterator = RBT.fromRules(frLatnElAiRules);

  return convertText(text, frIpaNgRules + ipaElRules, {
    source: words => frIpa(words.map(word => prepassTransliterator.transliterate(word))),
    caseLang: "el",
    elision: "'",
  });
};
