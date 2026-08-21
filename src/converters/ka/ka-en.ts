import { Text } from "types";

export const kaEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaEnRules } = await import("data/ka/ka-en.rules");

  const transliterator = RBT.fromRules(kaEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
