import { Text } from "types";

export const hrSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("data/hr-latn.rules");
  const { latnSvRules } = await import("data/latn-sv.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
