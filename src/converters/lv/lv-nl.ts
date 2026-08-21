import { Text } from "types";

export const lvNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
