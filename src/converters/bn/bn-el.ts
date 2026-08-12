import { Text } from "types";

export const bnEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnLatnRules } = await import("data/bn-latn.rules");
  const { latnElRules } = await import("data/latn-el.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
