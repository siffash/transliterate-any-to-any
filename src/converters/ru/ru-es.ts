import { Text } from "types";

export const ruEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("data/ru-latn.rules");
  const { latnEsRules } = await import("data/latn-es.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
