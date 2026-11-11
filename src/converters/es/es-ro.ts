import { Text } from "types";

export const esRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnRoRules + latnRoKRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
