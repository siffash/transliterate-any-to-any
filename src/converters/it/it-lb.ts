import { Text } from "types";

export const itLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
