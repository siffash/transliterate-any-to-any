import { Text } from "types";

export const itKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
