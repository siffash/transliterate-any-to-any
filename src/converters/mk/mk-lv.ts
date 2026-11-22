import { Text } from "types";

export const mkLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { mkLatnLvRules } = await import("data/mk/mk-latn_lv.rules");

  const transliterator = RBT.fromRules(mkLatnRules + mkLatnLvRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
