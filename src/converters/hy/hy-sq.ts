import { Text } from "types";

export const hySq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
