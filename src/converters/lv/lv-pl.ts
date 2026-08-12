import { Text } from "types";

export const lvPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv-latn.rules");
  const { latnPlRules } = await import("data/latn-pl.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
