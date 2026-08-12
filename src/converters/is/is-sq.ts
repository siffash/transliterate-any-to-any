import { Text } from "types";

export const isSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("data/is-latn.rules");
  const { latnSqRules } = await import("data/latn-sq.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
