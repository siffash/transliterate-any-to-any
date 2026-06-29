import { Text } from "types";

export const hiVi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
