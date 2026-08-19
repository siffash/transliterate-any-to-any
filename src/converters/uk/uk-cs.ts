import { Text } from "types";

export const ukCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
