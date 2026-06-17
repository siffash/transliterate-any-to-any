import { Text } from "types";

export const zhMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { zhMkRules } = await import("constants/zh-mk.rules");

  const transliterator = RBT.fromRules(zhMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
