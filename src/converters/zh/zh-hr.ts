import { Text } from "types";

export const zhHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnGlideRules } = await import("data/zh/zh-latn_glide.rules");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnGlideRules + zhLatnRules + latnHrRules, { source: zhLatn });
};
