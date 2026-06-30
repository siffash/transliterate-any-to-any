import { Text } from "types";

export const huEl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
