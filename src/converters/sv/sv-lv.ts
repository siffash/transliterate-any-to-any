import { Text } from "types";

export const svLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
