import { Text } from "types";

export const bgLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");
  const { bgLatnIjeRules } = await import("data/bg/bg-latn_ije.rules");

  return convertText(
    text,
    bgLatnIjaRules + bgLatnIjeRules + bgLatnRules + latnLvRules + latnJRestoreRules,
  );
};
