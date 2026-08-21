import { Text } from "types";

export const lbFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
