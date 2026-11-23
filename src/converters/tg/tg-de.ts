import { Text } from "types";

export const tgDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnIjRules } = await import("data/tg/tg-latn_ij.rules");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    tgLatnIjRules + tgLatnRules + latnGGhRules + latnQHoldRules + latnDeRules + latnQRestoreRules,
  );
};
