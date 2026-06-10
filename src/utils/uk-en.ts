import { Text } from "types/languages";

export const ukEn = async (text: Text, latin_ASCII: boolean) => {
  const { RBT } = await import("icu-transliterator");
  const { ukEnRules } = await import("constants/uk-en.rules");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(ukEnRules + (latin_ASCII ? latnAsciiRules : ""));

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
