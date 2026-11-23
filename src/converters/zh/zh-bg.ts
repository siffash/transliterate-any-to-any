import { Text } from "types";

export const zhBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhBgRules } = await import("data/zh/zh-bg.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhBgRules, { source: zhLatn });
};
