import { Text } from "types";

export const caSq = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
