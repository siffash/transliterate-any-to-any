import { Text } from "types";

export const hrIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  const transliterator = RBT.fromRules(
    hrLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnIsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
