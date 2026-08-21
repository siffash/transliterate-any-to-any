import { Text } from "types";

export const sqMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
