import { Text } from "types";

export const ruEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruEnRules } = await import("data/ru/ru-en.rules");

  const transliterator = RBT.fromRules(ruEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
