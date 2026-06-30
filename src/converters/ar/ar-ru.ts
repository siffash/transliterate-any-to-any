import { Text } from "types";

export const arRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar-ipa");
  const { ipaRuRules } = await import("constants/ipa-ru.rules");

  const transliterator = RBT.fromRules(ipaRuRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
