import { Text } from "types/languages";

export const zhUa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { zhUaRules } = await import("constants/zh-ua.rules");

  const transliterator = RBT.fromRules(zhUaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
