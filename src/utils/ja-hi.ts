import { Text } from "types/languages";

export const jaHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { jaIpa } = await import("utils/ja-ipa");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await jaIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await jaIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
