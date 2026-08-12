import { Text } from "types";

export const hrMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr-latn.rules");
  const { latnMkRules } = await import("data/latn-mk.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
