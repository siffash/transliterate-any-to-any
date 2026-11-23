import { Text } from "types";

export const bgEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaCaronRules } = await import("data/bg/bg_schwa-caron.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { latnCRestoreRules } = await import("data/latn/latn_c-restore.rules");
  const { latnCHoldRules } = await import("data/latn/latn_c-hold.rules");

  return convertText(
    text,
    bgSchwaCaronRules + bgLatnRules + latnCHoldRules + latnEtRules + latnCRestoreRules,
  );
};
