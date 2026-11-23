import { Text } from "types";

export const esSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { esLatnSrHoldRules } = await import("data/es/es-latn_sr-hold.rules");
  const { esLatnSrRestoreRules } = await import("data/es/es-latn_sr-restore.rules");

  return convertText(text, esLatnSrHoldRules + esLatnRules + esLatnSrRestoreRules + latnSrRules);
};
