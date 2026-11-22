import { Text } from "types";

export const frEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frLatnElAiRules } = await import("data/fr/fr-latn_el-ai.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const prepassTransliterator = RBT.fromRules(frLatnElAiRules);
  const transliterator = RBT.fromRules(frIpaNgRules + ipaElRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(prepassTransliterator.transliterate(text));
    return copyCase(text, keepElision(ipa, transliterator, "'"), "el");
  } else {
    const ipaArray = await frIpa<string[]>(
      text.map(text => prepassTransliterator.transliterate(text)),
    );
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator, "'"), "el"));
  }
};
