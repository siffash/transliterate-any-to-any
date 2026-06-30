import { Text } from "types";

export const etTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
