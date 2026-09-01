import { Text } from "types";

export const kkUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkUkRules } = await import("data/kk/kk-uk.rules");

  const transliterator = RBT.fromRules(kkUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
