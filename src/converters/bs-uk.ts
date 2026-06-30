import { Text } from "types";

export const bsUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
