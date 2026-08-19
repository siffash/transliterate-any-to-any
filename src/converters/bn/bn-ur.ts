import { Text } from "types";

export const bnUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnUrRules } = await import("data/bn/bn-ur.rules");

  const transliterator = RBT.fromRules(bnUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
