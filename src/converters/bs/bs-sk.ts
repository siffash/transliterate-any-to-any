import { Text } from "types";

export const bsSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
