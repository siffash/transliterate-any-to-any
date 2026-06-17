import { Text } from "types";

export const mkEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { mkEnRules } = await import("constants/mk-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(mkEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
