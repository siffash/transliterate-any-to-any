import { Text } from "types";

export const ptSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt-latn.rules");
  const { latnSqRules } = await import("data/latn-sq.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
