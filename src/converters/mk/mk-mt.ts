import { Text } from "types";

export const mkMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
