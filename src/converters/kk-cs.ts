import { Text } from "types";

export const kkCs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
