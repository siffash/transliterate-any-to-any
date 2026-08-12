import { Text } from "types";

export const bnHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnHiRules } = await import("data/bn-hi.rules");

  const transliterator = RBT.fromRules(bnHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
