import { Text } from "types";

export const esFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
