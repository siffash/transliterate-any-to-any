import { Text } from "types";

export const fiLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
