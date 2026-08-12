import { Text } from "types";

export const daRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da-latn.rules");
  const { latnRuRules } = await import("data/latn-ru.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
