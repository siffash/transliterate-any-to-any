import { Text } from "types";

export const ruHr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
