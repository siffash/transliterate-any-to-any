import { Text } from "types";

export const msLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
