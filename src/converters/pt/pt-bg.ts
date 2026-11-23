import { Text } from "types";

export const ptBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { ptLatnFinalSRules } = await import("data/pt/pt-latn_final-s.rules");

  return convertText(text, ptLatnDiphthongIRules + ptLatnRules + ptLatnFinalSRules + latnBgRules);
};
