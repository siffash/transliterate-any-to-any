import { Text } from "types";

export const azSr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
