import { Text } from "types";

export const viRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  return convertText(text, viLatnRules + latnRoRules + latnRoARules + latnRoKRules);
};
