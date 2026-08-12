import { Text } from "types";

export const mtSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
