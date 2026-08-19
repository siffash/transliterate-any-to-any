import { Text } from "types";

export const csDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
