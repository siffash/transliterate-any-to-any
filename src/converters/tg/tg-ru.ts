import { Text } from "types";

export const tgRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgRuRules } = await import("data/tg/tg-ru.rules");

  const transliterator = RBT.fromRules(tgRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
