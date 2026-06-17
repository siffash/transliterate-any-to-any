import { Text } from "types";

export const hyEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { hyEnRules } = await import("constants/hy-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(hyEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
