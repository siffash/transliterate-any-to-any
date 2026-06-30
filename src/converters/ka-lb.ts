import { Text } from "types";

export const kaLb = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
