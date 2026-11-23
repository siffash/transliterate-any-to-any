import { Text } from "types";

export const azKk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { latnKkTurkicRules } = await import("data/latn/latn-kk_turkic.rules");

  return convertText(text, azLatnRules + latnKkRules + latnKkTurkicRules);
};
