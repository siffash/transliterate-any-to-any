import { Text } from "types";

export const noLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("constants/no-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
