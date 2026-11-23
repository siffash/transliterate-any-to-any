import { Text } from "types";

export const itEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itRoLatnGhRules } = await import("data/latn/it_ro-latn_gh.rules");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(
    text,
    itLatnYHoldRules + itRoLatnGhRules + itLatnRules + itLatnYRestoreRules + latnEnRules,
  );
};
