import { Text } from "types";

export const esEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
