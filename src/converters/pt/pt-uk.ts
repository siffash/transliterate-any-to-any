import { Text } from "types";

export const ptUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnHiatusRules } = await import("data/pt/pt-latn_hiatus.rules");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");

  return convertText(
    text,
    ptLatnHiatusRules + ptLatnReductionRules + ptLatnDiphthongIRules + ptLatnRules + latnUkRules,
  );
};
