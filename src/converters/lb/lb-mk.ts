import { Text } from "types";

export const lbMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
