import { Text } from "types";

export const msMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
