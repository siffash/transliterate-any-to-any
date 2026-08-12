import { Text } from "types";

export const bnFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnFaRules } = await import("data/bn-fa.rules");

  const transliterator = RBT.fromRules(bnFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
