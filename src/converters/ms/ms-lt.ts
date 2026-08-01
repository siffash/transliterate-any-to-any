import { Text } from "types";

export const msLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnLtRules } = await import("constants/latn-lt.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
