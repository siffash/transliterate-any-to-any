import { Text } from "types";

export const arUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { arUrRules } = await import("data/ar/ar-ur.rules");

  const transliterator = RBT.fromRules(arUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
