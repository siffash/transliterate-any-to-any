import { Text } from "types";

export const sqDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
