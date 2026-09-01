import { Text } from "types";

export const kkRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkRuRules } = await import("data/kk/kk-ru.rules");

  const transliterator = RBT.fromRules(kkRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
