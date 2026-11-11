import { Text } from "types";

export const ruFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruFrRules } = await import("data/ru/ru-fr.rules");

  const transliterator = RBT.fromRules(ruFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
