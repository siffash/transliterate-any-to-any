import { Text } from "types";

export const arEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar-ipa");
  const { ipaEnRules } = await import("constants/ipa-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(ipaEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
