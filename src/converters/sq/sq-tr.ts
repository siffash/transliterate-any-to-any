import { Text } from "types";

export const sqTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq-latn.rules");
  const { latnTrRules } = await import("data/latn-tr.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
