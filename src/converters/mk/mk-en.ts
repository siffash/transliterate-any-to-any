import { Text } from "types";

export const mkEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkEnRules } = await import("constants/mk-en.rules");

  const transliterator = RBT.fromRules(mkEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
