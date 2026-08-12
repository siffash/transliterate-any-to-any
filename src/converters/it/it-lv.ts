import { Text } from "types";

export const itLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it-latn.rules");
  const { latnLvRules } = await import("data/latn-lv.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
