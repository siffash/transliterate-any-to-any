import { Text } from "types";

export const hrBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr-latn.rules");
  const { latnBsRules } = await import("data/latn-bs.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
