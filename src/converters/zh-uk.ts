import { Text } from "types";

export const zhUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { zhUkRules } = await import("constants/zh-uk.rules");

  const transliterator = RBT.fromRules(zhUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
