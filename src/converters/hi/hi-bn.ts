import { Text } from "types";

export const hiBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiBnRules } = await import("data/hi-bn.rules");

  const transliterator = RBT.fromRules(hiBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
