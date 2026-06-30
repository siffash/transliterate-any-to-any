import { Text } from "types";

export const fiBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
