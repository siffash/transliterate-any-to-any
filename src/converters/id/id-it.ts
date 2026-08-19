import { Text } from "types";

export const idIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
