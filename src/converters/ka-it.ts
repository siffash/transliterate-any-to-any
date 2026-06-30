import { Text } from "types";

export const kaIt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
