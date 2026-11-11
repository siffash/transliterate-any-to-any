import { Text } from "types";

export const bgPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnIyIiRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
