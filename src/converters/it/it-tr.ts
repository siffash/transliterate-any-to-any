import { Text } from "types";

export const itTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, itLatnYHoldRules + itLatnRules + itLatnYRestoreRules + latnTrRules);
};
