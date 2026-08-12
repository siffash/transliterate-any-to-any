import { Text } from "types";

export const hiPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiLatnRules } = await import("data/hi-latn.rules");
  const { latnPtRules } = await import("data/latn-pt.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
