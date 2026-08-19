import { Text } from "types";

export const esFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
