import { Text } from "types";

export const hyCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnCaJHoldRules } = await import("data/latn/latn-ca_j-hold.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    hyLatnRules + latnDzRules + latnCaJHoldRules + latnGGhRules + latnCaRules + latnJRestoreRules,
  );
};
