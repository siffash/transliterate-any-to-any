import { Text } from "types";

export const plSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { plLatnSrRules } = await import("data/pl/pl-latn_sr.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(text, plLatnSrRules + plLatnRules + latnHoldRestoreRules + latnSrRules);
};
