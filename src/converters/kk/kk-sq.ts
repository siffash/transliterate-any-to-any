import { Text } from "types";

export const kkSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
