import { Text } from "types";

export const ptRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");

  const transliterator = RBT.fromRules(
    ptLatnReductionRules + ptLatnDiphthongIRules + ptLatnRules + latnRomanceLyRules + latnRuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
