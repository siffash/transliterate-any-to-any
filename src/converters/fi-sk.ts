import { Text } from "types";

export const fiSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
