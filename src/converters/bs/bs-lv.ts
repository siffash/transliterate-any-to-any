import { Text } from "types";

export const bsLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("data/bs-latn.rules");
  const { latnLvRules } = await import("data/latn-lv.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
