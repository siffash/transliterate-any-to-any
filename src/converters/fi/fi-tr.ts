import { Text } from "types";

export const fiTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
