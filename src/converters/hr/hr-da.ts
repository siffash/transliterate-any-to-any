import { Text } from "types";

export const hrDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr-latn.rules");
  const { latnDaRules } = await import("data/latn-da.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
