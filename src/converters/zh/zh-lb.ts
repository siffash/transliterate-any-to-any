import { Text } from "types";

export const zhLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnLbRules, { source: zhLatn });
};
