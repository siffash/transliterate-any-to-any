import { Text } from "types";

export const etSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
