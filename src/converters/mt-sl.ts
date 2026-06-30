import { Text } from "types";

export const mtSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
