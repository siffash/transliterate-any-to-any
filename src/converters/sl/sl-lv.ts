import { Text } from "types";

export const slLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl-latn.rules");
  const { latnLvRules } = await import("data/latn-lv.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
