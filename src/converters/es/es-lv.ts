import { Text } from "types";

export const esLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { esLatnYHoldRules } = await import("data/es/es-latn_y-hold.rules");
  const { esLatnLvRules } = await import("data/es/es-latn_lv.rules");
  const { esLatnYRestoreRules } = await import("data/es/es-latn_y-restore.rules");

  return convertText(
    text,
    esLatnYHoldRules + esLatnRules + esLatnLvRules + esLatnYRestoreRules + latnLvRules,
  );
};
