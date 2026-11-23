import { Text } from "types";

export const tgFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(text, tgLatnRules + latnQHoldRules + latnFiRules + latnQRestoreRules);
};
