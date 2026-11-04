import { Text } from "types";

export const sqHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(sqLatnFinalERules + sqLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
