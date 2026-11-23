import { Text } from "types";

export const kaFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnXKhRules } = await import("data/latn/latn_x-kh.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    kaLatnRules + kaLatnJoinRules + latnQHoldRules + latnXKhRules + latnFiRules + latnQRestoreRules,
  );
};
