import { Text } from "types";

export const itFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, itLatnYHoldRules + itLatnRules + itLatnYRestoreRules + latnFrRules);
};
