import { Text } from "types";

export const mtFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
