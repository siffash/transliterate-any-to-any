import { Text } from "types";

export const ukMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukMkRules } = await import("constants/uk-mk.rules");

  const transliterator = RBT.fromRules(ukMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
