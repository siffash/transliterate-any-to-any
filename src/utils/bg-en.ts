import { Text } from "types/languages";

export const bgEn = async (text: Text, latin_ASCII: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { bgEnRules } = await import("constants/bg-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(bgEnRules + (latin_ASCII ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
