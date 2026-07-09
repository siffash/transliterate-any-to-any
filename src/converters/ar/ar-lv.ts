import { Text } from "types";

export const arLv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaLvRules } = await import("constants/ipa-lv.rules");

  const transliterator = RBT.fromRules(ipaLvRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
