import { Text } from "types";

export const azLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
