import { Text } from "types";

export const hyMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
