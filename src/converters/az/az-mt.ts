import { Text } from "types";

export const azMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
