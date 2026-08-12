import { Text } from "types";

export const faFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faFaRules } = await import("constants/fa-fa.rules");

  const transliterator = RBT.fromRules(faFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
