import { Text } from "types";

export const sqEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
