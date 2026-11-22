import { Text } from "types";

export const arBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnAjRules } = await import("data/ipa/ipa-bn_aj.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(ipaBnAjRules + ipaBnYRules + ipaBnRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text, { dropLoneArticle: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text, { dropLoneArticle: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
