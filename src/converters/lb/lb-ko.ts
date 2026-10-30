import { Text } from "types";

export const lbKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaKoEzhRules } = await import("data/ipa/ipa-ko_ezh.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoEzhRules + ipaKoRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
