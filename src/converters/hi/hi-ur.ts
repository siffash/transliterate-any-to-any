import { Text } from "types";

export const hiUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiUrRules } = await import("data/hi/hi-ur.rules");

  const transliterator = RBT.fromRules(hiUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
