import { Text } from "types";

export const slLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
