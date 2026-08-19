import { Text } from "types";

export const bgEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgEnRules } = await import("data/bg/bg-en.rules");

  const transliterator = RBT.fromRules(bgEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
