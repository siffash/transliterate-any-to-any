import { Text } from "types";

export const nlLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl-latn.rules");
  const { latnLbRules } = await import("data/latn-lb.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
