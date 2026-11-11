import { Text } from "types";

export const esCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnCaRules + latnKQuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
