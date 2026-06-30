import { Text } from "types";

export const kaFr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
