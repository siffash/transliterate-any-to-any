import { Text } from "types";

export const daBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
