import { Text } from "types";

export const caVi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
