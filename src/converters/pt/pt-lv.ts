import { Text } from "types";

export const ptLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { ptLatnSaoRules } = await import("data/pt/pt-latn_sao.rules");
  const { ptLatnLvRules } = await import("data/pt/pt-latn_lv.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(
    text,
    ptLatnSaoRules +
      ptLatnLvRules +
      ptLatnSRules +
      ptLatnRules +
      latnHoldRestoreRules +
      latnLvRules,
  );
};
