import { Text } from "types";

export const arHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaHiAiRules } = await import("data/ipa/ipa-hi_ai.rules");

  const transliterator = RBT.fromRules(ipaHiAiRules + ipaHiRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text, { dropLoneArticle: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text, { dropLoneArticle: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
