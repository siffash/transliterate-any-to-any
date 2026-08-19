import { Text } from "types";

export const ukEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukEnRules } = await import("data/uk/uk-en.rules");

  const transliterator = RBT.fromRules(ukEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
