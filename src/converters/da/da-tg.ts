import { Text } from "types";

export const daTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnTgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
