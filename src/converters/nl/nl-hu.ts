import { Text } from "types";

export const nlHu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
