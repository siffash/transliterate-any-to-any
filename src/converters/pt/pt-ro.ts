import { Text } from "types";

export const ptRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  return convertText(text, ptLatnRules + latnRoRules + latnRoKRules);
};
