import { Text } from "types";

export const idRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnRuRules } = await import("constants/latn-ru.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
