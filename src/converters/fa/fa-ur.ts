import { Text } from "types";

export const faUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faUrRules } = await import("data/fa-ur.rules");

  const transliterator = RBT.fromRules(faUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
