import { Text } from "types";

export const kkLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
