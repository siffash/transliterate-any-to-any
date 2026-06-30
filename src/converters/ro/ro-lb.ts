import { Text } from "types";

export const roLb = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
