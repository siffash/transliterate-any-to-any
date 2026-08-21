import { Text } from "types";

export const ukMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukMkRules } = await import("data/uk/uk-mk.rules");

  const transliterator = RBT.fromRules(ukMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
