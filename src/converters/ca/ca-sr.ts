import { Text } from "types";

export const caSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { caLatnSHoldRules } = await import("data/ca/ca-latn_s-hold.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");
  const { caLatnAyRules } = await import("data/ca/ca-latn_ay.rules");

  return convertText(
    text,
    caLatnSHoldRules + caLatnAyRules + caLatnRules + latnHoldRestoreRules + latnSrRules,
  );
};
