import { Text } from "types";

export const kkMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkMkRules } = await import("data/kk/kk-mk.rules");

  const transliterator = RBT.fromRules(kkMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
