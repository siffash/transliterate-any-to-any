import { Text } from "types";

export const sqCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
