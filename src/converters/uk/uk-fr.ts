import { Text } from "types";

export const ukFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukFrRules } = await import("data/uk/uk-fr.rules");

  const transliterator = RBT.fromRules(ukFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
