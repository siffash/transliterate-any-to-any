import { Text } from "types";

export const arDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar-ipa");
  const { ipaDaRules } = await import("constants/ipa-da.rules");

  const transliterator = RBT.fromRules(ipaDaRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
