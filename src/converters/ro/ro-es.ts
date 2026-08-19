import { Text } from "types";

export const roEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
