import { Text } from "types";

export const hrEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
