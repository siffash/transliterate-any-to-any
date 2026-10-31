import { Text } from "types";

export const sqRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnLRules } = await import("data/sq/sq-latn_l.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(sqLatnLRules + sqLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
