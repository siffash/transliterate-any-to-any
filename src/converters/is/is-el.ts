import { Text } from "types";

export const isEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnTlRules } = await import("data/is/is-latn_tl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(isLatnTlRules + isLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
