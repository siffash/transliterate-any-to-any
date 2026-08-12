import { Text } from "types";

export const hrTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr-latn.rules");
  const { latnTrRules } = await import("data/latn-tr.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
