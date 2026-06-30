import { Text } from "types";

export const ukBs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
