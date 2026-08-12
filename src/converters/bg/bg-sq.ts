import { Text } from "types";

export const bgSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
