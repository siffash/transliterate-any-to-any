import { Text } from "types";

export const daLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
