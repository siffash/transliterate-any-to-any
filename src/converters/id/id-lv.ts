import { Text } from "types";

export const idLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(msIdLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
