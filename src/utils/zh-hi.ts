import { Text } from "types/languages";

export const zhHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { zhIpa } = await import("utils/zh-ipa");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await zhIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await zhIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
