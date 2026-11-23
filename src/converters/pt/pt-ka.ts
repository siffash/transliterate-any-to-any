import { Text } from "types";

export const ptKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");

  return convertText(text, ptLatnReductionRules + ptLatnRules + latnKaRules);
};
