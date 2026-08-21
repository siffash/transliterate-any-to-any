import { Text } from "types";

export const lvFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
