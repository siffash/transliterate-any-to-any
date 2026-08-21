import { Text } from "types";

export const fiSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
