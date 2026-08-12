import { Text } from "types";

export const lbEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("data/lb-latn.rules");
  const { latnElRules } = await import("data/latn-el.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
