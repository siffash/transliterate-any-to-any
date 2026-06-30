import { Text } from "types";

export const ltUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
