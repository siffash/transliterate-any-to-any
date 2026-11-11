import { Text } from "types";

export const ruDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { ruLatnIjRules } = await import("data/ru/ru-latn_ij.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + ruLatnIjRules + latnAiRules + latnDeRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
