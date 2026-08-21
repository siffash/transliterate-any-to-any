import { Text } from "types";

export const fiEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
