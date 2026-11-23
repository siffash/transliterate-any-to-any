import { Text } from "types";

export const tgRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");
  const { latnRoDjRules } = await import("data/latn/latn-ro_dj.rules");

  return convertText(
    text,
    tgLatnRules + latnQHoldRules + latnRoDjRules + latnRoRules + latnQRestoreRules,
  );
};
