import { Text } from "types";

export const bgIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgItRules } = await import("data/bg/bg-it.rules");

  const transliterator = RBT.fromRules(bgItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
