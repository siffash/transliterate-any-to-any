import { Text } from "types";

export const deLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
