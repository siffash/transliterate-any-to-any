import { Text } from "types";

export const bgLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
