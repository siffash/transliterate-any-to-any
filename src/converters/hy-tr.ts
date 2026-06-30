import { Text } from "types";

export const hyTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
