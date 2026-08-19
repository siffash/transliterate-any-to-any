import { Text } from "types";

export const esEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
