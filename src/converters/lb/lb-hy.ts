import { Text } from "types";

export const lbHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
