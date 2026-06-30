import { Text } from "types";

export const huSr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
