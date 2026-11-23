import { Text } from "types";

export const ptFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, ptRoLatnThRules + ptLatnRules + latnFrRules);
};
