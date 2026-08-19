import { Text } from "types";

export const svSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
