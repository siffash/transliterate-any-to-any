import { Text } from "types";

export const mtLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
