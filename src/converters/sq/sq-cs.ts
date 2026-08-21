import { Text } from "types";

export const sqCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
