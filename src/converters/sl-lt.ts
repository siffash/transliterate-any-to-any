import { Text } from "types";

export const slLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnLtRules } = await import("constants/latn-lt.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
