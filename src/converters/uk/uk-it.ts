import { Text } from "types";

export const ukIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukItRules } = await import("data/uk/uk-it.rules");

  const transliterator = RBT.fromRules(ukItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
