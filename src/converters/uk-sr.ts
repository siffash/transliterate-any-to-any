import { Text } from "types";

export const ukSr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
