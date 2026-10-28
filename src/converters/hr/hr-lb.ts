import { Text } from "types";

export const hrLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  const transliterator = RBT.fromRules(
    hrLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnLbRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
