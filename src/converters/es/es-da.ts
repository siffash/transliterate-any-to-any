import { Text } from "types";

export const esDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es-latn.rules");
  const { latnDaRules } = await import("data/latn-da.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
