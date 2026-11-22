import { Text } from "types";

export const esEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { latnElDRules } = await import("data/latn/latn-el_d.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnElDRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
