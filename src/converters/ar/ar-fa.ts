import { Text } from "types";

export const arFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { arFaRules } = await import("constants/ar-fa.rules");

  const transliterator = RBT.fromRules(arFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
