import { Text } from "types";

export const bsPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
