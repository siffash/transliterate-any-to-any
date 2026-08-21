import { Text } from "types";

export const daTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
