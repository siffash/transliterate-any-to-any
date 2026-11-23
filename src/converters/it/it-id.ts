import { Text } from "types";

export const itId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, itLatnYHoldRules + itLatnRules + itLatnYRestoreRules + latnIdRules);
};
