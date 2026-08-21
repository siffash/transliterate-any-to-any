import { Text } from "types";

export const esFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
