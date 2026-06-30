import { Text } from "types";

export const ruNl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
