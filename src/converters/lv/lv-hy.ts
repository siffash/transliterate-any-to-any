import { Text } from "types";

export const lvHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
