import { Text } from "types/languages";

export const zhBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { zhBgRules } = await import("constants/zh-bg.rules");

  const transliterator = RBT.fromRules(zhBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
