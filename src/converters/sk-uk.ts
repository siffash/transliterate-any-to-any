import { Text } from "types";

export const skUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
