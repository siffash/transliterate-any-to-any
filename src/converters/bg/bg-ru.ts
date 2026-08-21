import { Text } from "types";

export const bgRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgRuRules } = await import("data/bg/bg-ru.rules");

  const transliterator = RBT.fromRules(bgRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
