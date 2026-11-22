import { Text } from "types";

export const hiTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiThRules } = await import("data/hi/hi-th.rules");

  const transliterator = RBT.fromRules(hiThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
