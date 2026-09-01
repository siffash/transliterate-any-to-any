import { Text } from "types";

export const bgKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgKkRules } = await import("data/bg/bg-kk.rules");

  const transliterator = RBT.fromRules(bgKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
