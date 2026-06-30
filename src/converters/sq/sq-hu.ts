import { Text } from "types";

export const sqHu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
