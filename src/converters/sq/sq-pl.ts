import { Text } from "types";

export const sqPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
