import { Text } from "types";

export const ptKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");

  const transliterator = RBT.fromRules(ptLatnReductionRules + ptLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
