import { Text } from "types/languages";

export const zhLatn = async (text: Text, latin_ASCII: boolean) => {
  const { pinyin } = await import("pinyin-pro");

  const convert = async (text: string) => {
    let result = pinyin(text);

    if (latin_ASCII) {
      const { RBT } = await import("icu-transliterator");
      const { latnAsciiRules } = await import("constants/latn-ascii.rules");
      const transliterator = RBT.fromRules(latnAsciiRules);
      result = transliterator.transliterate(result);
    }

    return result;
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
