import { Text } from "types";

export const ruPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruPlRules } = await import("data/ru/ru-pl.rules");

  const transliterator = RBT.fromRules(ruPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
