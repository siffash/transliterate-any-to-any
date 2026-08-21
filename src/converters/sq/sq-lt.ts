import { Text } from "types";

export const sqLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
