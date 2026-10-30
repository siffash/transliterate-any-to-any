import { Text } from "types";

export const deIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnItRules + latnItIiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
