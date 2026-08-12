import { Text } from "types";

export const msPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
