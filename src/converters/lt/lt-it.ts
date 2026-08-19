import { Text } from "types";

export const ltIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
