import { Text } from "types";

export const kkVi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
