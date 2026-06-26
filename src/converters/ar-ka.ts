import { Text } from "types";

export const arKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar-ipa");
  const { ipaKaRules } = await import("constants/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
