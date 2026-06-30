import { Text } from "types";

export const sqSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
