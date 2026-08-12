import { Text } from "types";

export const esFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
