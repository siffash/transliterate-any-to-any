import { Text } from "types";

export const arEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpaRules } = await import("constants/ar-ipa.rules");
  const { ipaEnRules } = await import("constants/ipa-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(arIpaRules + ipaEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
