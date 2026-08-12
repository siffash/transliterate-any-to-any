import { Text } from "types";

export const ltEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
