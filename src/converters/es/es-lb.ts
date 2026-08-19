import { Text } from "types";

export const esLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
