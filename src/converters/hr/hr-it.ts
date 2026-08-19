import { Text } from "types";

export const hrIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
