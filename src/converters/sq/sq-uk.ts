import { Text } from "types";

export const sqUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnLRules } = await import("data/sq/sq-latn_l.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(sqLatnLRules + sqLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
