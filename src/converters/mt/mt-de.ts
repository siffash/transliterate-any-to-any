import { Text } from "types";

export const mtDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt-latn.rules");
  const { latnDeRules } = await import("data/latn-de.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
