import { Text } from "types";

export const sqLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq-latn.rules");
  const { latnLtRules } = await import("data/latn-lt.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
