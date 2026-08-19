import { Text } from "types";

export const daDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
