import { Text } from "types";

export const mtEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
