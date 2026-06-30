import { Text } from "types";

export const mtHr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
