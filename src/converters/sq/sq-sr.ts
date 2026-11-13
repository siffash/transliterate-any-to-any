import { Text } from "types";

export const sqSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { sqLatnQRules } = await import("data/sq/sq-latn_q.rules");

  const transliterator = RBT.fromRules(
    sqLatnFinalERules + sqLatnRules + sqLatnQRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
