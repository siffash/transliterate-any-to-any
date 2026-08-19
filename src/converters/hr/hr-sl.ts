import { Text } from "types";

export const hrSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
