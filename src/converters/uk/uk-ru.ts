import { Text } from "types";

export const ukRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukRuRules } = await import("constants/uk-ru.rules");

  const transliterator = RBT.fromRules(ukRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
