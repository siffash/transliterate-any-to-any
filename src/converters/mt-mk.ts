import { Text } from "types";

export const mtMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnMkRules } = await import("constants/latn-mk.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
