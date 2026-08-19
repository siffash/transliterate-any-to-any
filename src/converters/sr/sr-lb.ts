import { Text } from "types";

export const srLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
