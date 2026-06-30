import { Text } from "types";

export const mkTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
