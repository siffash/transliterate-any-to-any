import { Text } from "types";

export const trEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
