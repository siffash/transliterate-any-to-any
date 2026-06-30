import { Text } from "types";

export const skIt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
