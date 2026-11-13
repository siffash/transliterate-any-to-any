import { Text } from "types";

export const itLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { itLatnLvRules } = await import("data/it/it-latn_lv.rules");

  const transliterator = RBT.fromRules(itLatnRules + itLatnYeRules + itLatnLvRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
