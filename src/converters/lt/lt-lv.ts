import { Text } from "types";

export const ltLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltLvRules } = await import("data/lt/lt-lv.rules");

  const transliterator = RBT.fromRules(ltLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
