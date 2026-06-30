import { Text } from "types";

export const hyVi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
