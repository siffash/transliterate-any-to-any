import { Text } from "types";

export const ukPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukPlRules } = await import("data/uk/uk-pl.rules");

  const transliterator = RBT.fromRules(ukPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
