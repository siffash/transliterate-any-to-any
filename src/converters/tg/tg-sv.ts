import { Text } from "types";

export const tgSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    tgLatnRules + latnDzjRules + latnQHoldRules + latnSvRules + latnQRestoreRules,
  );
};
