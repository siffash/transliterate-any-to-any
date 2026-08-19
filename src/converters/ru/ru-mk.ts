import { Text } from "types";

export const ruMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruMKRules } = await import("data/ru/ru-mk.rules");

  const transliterator = RBT.fromRules(ruMKRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
