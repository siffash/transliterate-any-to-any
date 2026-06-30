import { Text } from "types";

export const srSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
