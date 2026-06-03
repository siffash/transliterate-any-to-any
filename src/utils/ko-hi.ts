import { Text } from "types/languages";

export const koHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { koIpa } = await import("utils/ko-ipa");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await koIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await koIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
