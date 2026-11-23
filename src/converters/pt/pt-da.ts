import { Text } from "types";

export const ptDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, ptLatnRules + latnDaRules + latnZSRules);
};
