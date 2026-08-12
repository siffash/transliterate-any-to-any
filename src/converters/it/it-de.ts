import { Text } from "types";

export const itDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it-latn.rules");
  const { latnDeRules } = await import("data/latn-de.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
