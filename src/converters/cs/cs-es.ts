import { Text } from "types";

export const csEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
