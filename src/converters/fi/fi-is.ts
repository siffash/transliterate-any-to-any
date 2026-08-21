import { Text } from "types";

export const fiIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
