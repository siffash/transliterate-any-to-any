import { Text } from "types";

export const esNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
