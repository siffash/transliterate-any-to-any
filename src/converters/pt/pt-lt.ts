import { Text } from "types";

export const ptLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { ptLatnSaoRules } = await import("data/pt/pt-latn_sao.rules");
  const { ptLatnLtRules } = await import("data/pt/pt-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(
    text,
    ptLatnSaoRules +
      ptLatnLtRules +
      ptLatnSRules +
      ptLatnRules +
      latnHoldRestoreRules +
      latnLtRules,
  );
};
