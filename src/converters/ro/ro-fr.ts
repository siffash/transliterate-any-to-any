import { Text } from "types";

export const roFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, ptRoLatnThRules + roLatnRules + latnIRules + latnFrRules);
};
