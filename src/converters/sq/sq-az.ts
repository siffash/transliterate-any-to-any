import { Text } from "types";

export const sqAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { sqLatnRrRules } = await import("data/sq/sq-latn_rr.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");
  const { sqLatnQRules } = await import("data/sq/sq-latn_q.rules");

  return convertText(
    text,
    sqLatnFinalERules +
      sqLatnRrRules +
      sqLatnRules +
      sqLatnDhRules +
      sqLatnQRules +
      latnHoldRestoreRules +
      latnAzRules,
  );
};
