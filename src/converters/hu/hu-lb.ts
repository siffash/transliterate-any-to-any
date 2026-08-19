import { Text } from "types";

export const huLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
