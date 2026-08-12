import { Text } from "types";

export const bgSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("data/bg-latn.rules");
  const { latnSqRules } = await import("data/latn-sq.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
