import { Text } from "types";

export const elCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnCaGHoldRules } = await import("data/latn/latn-ca_g-hold.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnCaGRestoreRules } = await import("data/latn/latn-ca_g-restore.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");

  return convertText(
    text,
    elLatnRules + latnCaGHoldRules + latnCaRules + latnCaGRestoreRules + latnXRules,
  );
};
