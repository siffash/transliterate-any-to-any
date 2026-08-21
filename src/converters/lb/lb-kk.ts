import { Text } from "types";

export const lbKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
