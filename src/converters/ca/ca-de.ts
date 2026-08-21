import { Text } from "types";

export const caDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
