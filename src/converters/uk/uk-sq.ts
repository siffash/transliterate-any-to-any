import { Text } from "types";

export const ukSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk-latn.rules");
  const { latnSqRules } = await import("data/latn-sq.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
