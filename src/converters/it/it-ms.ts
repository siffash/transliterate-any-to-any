import { Text } from "types";

export const itMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, itLatnYHoldRules + itLatnRules + itLatnYRestoreRules + latnMsRules);
};
