import { Text } from "types";

export const zhBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnGlideRules } = await import("data/zh/zh-latn_glide.rules");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnGlideRules + zhLatnRules + latnBsRules, { source: zhLatn });
};
