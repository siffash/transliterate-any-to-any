import { Text } from "types/languages";

export const ruEn = async (text: Text, latin_ASCII: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { ruEnRules } = await import("constants/ru-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(ruEnRules + (latin_ASCII ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
