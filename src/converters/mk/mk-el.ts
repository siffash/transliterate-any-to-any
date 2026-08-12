import { Text } from "types";

export const mkEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
