import { Text } from "types";

export const ukLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnLtRules } = await import("constants/latn-lt.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
