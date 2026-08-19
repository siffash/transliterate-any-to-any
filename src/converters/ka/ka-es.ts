import { Text } from "types";

export const kaEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
