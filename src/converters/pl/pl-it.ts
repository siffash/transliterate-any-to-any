import { Text } from "types";

export const plIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnItRules + latnItIiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
