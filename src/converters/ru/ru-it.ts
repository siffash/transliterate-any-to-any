import { Text } from "types";

export const ruIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruItRules } = await import("data/ru/ru-it.rules");

  const transliterator = RBT.fromRules(ruItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
