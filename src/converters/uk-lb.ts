import { Text } from "types";

export const ukLb = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
