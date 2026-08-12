import { Text } from "types";

export const hrUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
