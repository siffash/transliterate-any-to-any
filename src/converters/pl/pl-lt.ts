import { Text } from "types";

export const plLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { plLatnLtRules } = await import("data/pl/pl-latn_lt.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");
  const { plLatnLtRestoreRules } = await import("data/pl/pl-latn_lt-restore.rules");

  return convertText(
    text,
    plLatnLtRules + plLatnRules + latnHoldRestoreRules + latnLtRules + plLatnLtRestoreRules,
  );
};
