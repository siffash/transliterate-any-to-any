import { Text } from "types";

export const fiEl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
