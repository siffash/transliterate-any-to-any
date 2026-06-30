import { Text } from "types";

export const fiBs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
