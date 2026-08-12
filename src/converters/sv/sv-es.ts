import { Text } from "types";

export const svEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("constants/sv-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
