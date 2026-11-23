import { Text } from "types";

export const ptRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");

  return convertText(
    text,
    ptLatnReductionRules + ptLatnDiphthongIRules + ptLatnRules + latnRomanceLyRules + latnRuRules,
  );
};
