import { Text } from "types";

export const zhRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { zhRuRules } = await import("constants/zh-ru.rules");

  const transliterator = RBT.fromRules(zhRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
