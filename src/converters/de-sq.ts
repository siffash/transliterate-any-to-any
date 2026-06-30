import { Text } from "types";

export const deSq = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
