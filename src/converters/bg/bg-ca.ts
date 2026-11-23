import { Text } from "types";

export const bgCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnCaJHoldRules } = await import("data/latn/latn-ca_j-hold.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    bgLatnRules + latnDzRules + latnCaJHoldRules + latnCaRules + latnJRestoreRules,
  );
};
