import { Text } from "types";

export const msIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnItRules + latnItIiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
