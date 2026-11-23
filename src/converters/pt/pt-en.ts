import { Text } from "types";

export const ptEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, ptRoLatnThRules + ptLatnRules + latnEnRules);
};
