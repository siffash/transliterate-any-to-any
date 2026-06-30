import { Text } from "types";

export const fiSq = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
