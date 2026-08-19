import { Text } from "types";

export const etSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
