import { Text } from "types";

export const ukPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnLNRules } = await import("data/latn/latn_l-n.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + latnSeparatorRules + latnIyIiRules + latnLNRules + latnPtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
