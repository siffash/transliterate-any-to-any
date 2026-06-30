import { Text } from "types";

export const ruSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
