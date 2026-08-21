import { Text } from "types";

export const daEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
