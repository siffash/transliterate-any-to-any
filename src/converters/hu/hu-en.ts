import { Text } from "types";

export const huEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEoHoldRules } = await import("data/hu/hu-latn_eo-hold.rules");
  const { huLatnEoRestoreRules } = await import("data/hu/hu-latn_eo-restore.rules");
  const { huLatnEnRules } = await import("data/hu/hu-latn_en.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(
    text,
    huLatnEoHoldRules + huLatnRules + huLatnEoRestoreRules + huLatnEnRules + latnEnRules,
  );
};
