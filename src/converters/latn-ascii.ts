import { Text } from "types";

export const latnAscii = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { latnAsciiRules } = await import("constants/latn-ascii.rules");

  const transliterator = RBT.fromRules(latnAsciiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
