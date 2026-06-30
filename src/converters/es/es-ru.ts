import { Text } from "types";

export const esRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnRuRules } = await import("constants/latn-ru.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
