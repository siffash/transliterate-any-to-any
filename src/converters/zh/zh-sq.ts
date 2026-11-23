import { Text } from "types";

export const zhSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { zhLatnSqRules } = await import("data/zh/zh-latn_sq.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + zhLatnSqRules + latnSqRules, { source: zhLatn });
};
