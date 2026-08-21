import { Text } from "types";

export const hiFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiFaRules } = await import("data/hi/hi-fa.rules");

  const transliterator = RBT.fromRules(hiFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
