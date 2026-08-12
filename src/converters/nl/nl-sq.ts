import { Text } from "types";

export const nlSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl-latn.rules");
  const { latnSqRules } = await import("data/latn-sq.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
