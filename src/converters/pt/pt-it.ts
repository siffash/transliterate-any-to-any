import { Text } from "types";

export const ptIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
