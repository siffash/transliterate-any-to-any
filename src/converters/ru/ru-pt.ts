import { Text } from "types";

export const ruPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnLNRules } = await import("data/latn/latn_l-n.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + latnIyIiRules + latnLNRules + latnPtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
