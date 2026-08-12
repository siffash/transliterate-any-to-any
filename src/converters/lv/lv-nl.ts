import { Text } from "types";

export const lvNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
