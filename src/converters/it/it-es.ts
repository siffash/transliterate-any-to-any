import { Text } from "types";

export const itEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(
    text,
    itLatnYHoldRules + itLatnRules + itLatnYRestoreRules + latnEsRules + latnXRules + latnKQuRules,
  );
};
