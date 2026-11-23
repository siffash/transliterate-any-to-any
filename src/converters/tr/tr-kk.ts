import { Text } from "types";

export const trKk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGRules } = await import("data/tr/tr-latn_front-g.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { latnKkTurkicRules } = await import("data/latn/latn-kk_turkic.rules");

  return convertText(text, trLatnFrontGRules + trLatnRules + latnKkRules + latnKkTurkicRules);
};
