import { Text } from "types";

export const mkBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkBgRules } = await import("constants/mk-bg.rules");

  const transliterator = RBT.fromRules(mkBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
