import { Text } from "types";

export const lvLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLtRules } = await import("data/lv/lv-lt.rules");

  const transliterator = RBT.fromRules(lvLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
