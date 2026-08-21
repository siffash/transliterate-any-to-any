import { Text } from "types";

export const ukRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukRuRules } = await import("data/uk/uk-ru.rules");

  const transliterator = RBT.fromRules(ukRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
