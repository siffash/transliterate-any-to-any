import { Text } from "types";

export const lvEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv-latn.rules");
  const { latnElRules } = await import("data/latn-el.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
