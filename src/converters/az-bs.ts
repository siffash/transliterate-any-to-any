import { Text } from "types";

export const azBs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
