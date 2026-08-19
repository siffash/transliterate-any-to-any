import { Text } from "types";

export const ukLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
