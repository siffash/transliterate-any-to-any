import { Text } from "types";

export const trBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGRules } = await import("data/tr/tr-latn_front-g.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, trLatnFrontGRules + trLatnRules + latnBgRules);
};
