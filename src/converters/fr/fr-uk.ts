import { Text } from "types";

export const frUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaCyrlRules } = await import("data/fr/fr-ipa_cyrl.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(frIpaCyrlRules + ipaUkRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "uk");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "uk"));
  }
};
