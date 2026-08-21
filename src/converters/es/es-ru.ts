import { Text } from "types";

export const esRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
