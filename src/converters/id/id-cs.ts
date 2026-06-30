import { Text } from "types";

export const idCs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
