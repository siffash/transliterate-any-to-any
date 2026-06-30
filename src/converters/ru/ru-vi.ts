import { Text } from "types";

export const ruVi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
