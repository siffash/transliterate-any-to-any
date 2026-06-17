import { Text } from "types";

export const ukEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { ukEnRules } = await import("constants/uk-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(ukEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
