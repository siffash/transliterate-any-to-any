import { Text } from "types";

export const hrCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
