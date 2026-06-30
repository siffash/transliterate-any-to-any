import { Text } from "types";

export const srNl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
