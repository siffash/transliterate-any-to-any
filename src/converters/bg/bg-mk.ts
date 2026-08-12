import { Text } from "types";

export const bgMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgMkRules } = await import("data/bg-mk.rules");

  const transliterator = RBT.fromRules(bgMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
