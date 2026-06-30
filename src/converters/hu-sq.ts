import { Text } from "types";

export const huSq = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
