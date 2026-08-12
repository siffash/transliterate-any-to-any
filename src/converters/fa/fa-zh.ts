import { Text } from "types";

export const faZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaZhRules);

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
