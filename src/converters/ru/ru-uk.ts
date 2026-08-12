import { Text } from "types";

export const ruUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruUkRules } = await import("constants/ru-uk.rules");

  const transliterator = RBT.fromRules(ruUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
