import { Text } from "types";

export const ltDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt-latn.rules");
  const { latnDeRules } = await import("data/latn-de.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
