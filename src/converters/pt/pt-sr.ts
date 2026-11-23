import { Text } from "types";

export const ptSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(text, ptLatnSRules + ptLatnRules + latnHoldRestoreRules + latnSrRules);
};
