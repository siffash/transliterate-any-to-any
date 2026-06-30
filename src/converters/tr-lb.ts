import { Text } from "types";

export const trLb = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
