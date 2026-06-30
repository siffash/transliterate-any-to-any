import { Text } from "types";

export const hyRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnRuRules } = await import("constants/latn-ru.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
