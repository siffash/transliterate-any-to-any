import { Text } from "types";

export const bnBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnBnRules } = await import("constants/bn-bn.rules");

  const transliterator = RBT.fromRules(bnBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
