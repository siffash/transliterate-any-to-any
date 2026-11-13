import { Text } from "types";

export const skLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { csSkLatnLvRules } = await import("data/latn/cs_sk-latn_lv.rules");

  const transliterator = RBT.fromRules(csSkLatnLvRules + skLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
