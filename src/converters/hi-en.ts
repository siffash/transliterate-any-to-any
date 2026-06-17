import { Text } from "types";

export const hiEn = async (text: Text, ascii: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { hiEnRules } = await import("constants/hi-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(hiEnRules + (ascii ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
