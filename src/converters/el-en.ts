import { Text } from "types";

export const elEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { elEnRules } = await import("constants/el-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(elEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
