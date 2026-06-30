import { Text } from "types";

export const kaTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
