import { Text } from "types";

export const ptUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnHiatusRules } = await import("data/pt/pt-latn_hiatus.rules");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");

  const transliterator = RBT.fromRules(
    ptLatnHiatusRules + ptLatnReductionRules + ptLatnDiphthongIRules + ptLatnRules + latnUkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
