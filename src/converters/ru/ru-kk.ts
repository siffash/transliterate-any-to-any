import { Text } from "types";

export const ruKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruKkRules } = await import("data/ru/ru-kk.rules");

  const transliterator = RBT.fromRules(ruKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
