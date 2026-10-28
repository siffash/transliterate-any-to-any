import { Text } from "types";

export const hrDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  const transliterator = RBT.fromRules(
    hrLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnDaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
