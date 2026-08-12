import { Text } from "types";

export const urFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urFaRules } = await import("data/ur-fa.rules");

  const transliterator = RBT.fromRules(urFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
