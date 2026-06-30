import { Text } from "types";

export const huLb = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
