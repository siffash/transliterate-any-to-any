import { Text } from "types";

export const ptSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(text, ptLatnSRules + ptLatnRules + latnHoldRestoreRules + latnSqRules);
};
