import { Text } from "types";

export const faAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faArRules } = await import("data/fa/fa-ar.rules");

  const transliterator = RBT.fromRules(faArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
