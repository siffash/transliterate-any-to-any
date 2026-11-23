import { Text } from "types";

export const ruLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnLvRules } = await import("data/ru/ru-latn_lv.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnLvJHoldRules } = await import("data/latn/latn-lv_j-hold.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    ruLatnLvRules +
      ruLatnRules +
      latnSeparatorRules +
      latnLvJHoldRules +
      latnLvRules +
      latnJRestoreRules,
  );
};
