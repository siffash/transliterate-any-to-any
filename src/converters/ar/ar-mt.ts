import { Text } from "types";

export const arMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar-ipa");
  const { ipaMtRules } = await import("constants/ipa-mt.rules");

  const transliterator = RBT.fromRules(ipaMtRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
