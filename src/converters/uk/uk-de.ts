import { Text } from "types";

export const ukDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk-latn.rules");
  const { latnDeRules } = await import("data/latn-de.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
