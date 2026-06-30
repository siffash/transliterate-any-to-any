import { Text } from "types";

export const azUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
