import { Text } from "types";

export const zhSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhSlRules } = await import("data/zh/zh-sl.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhSlRules, { source: zhLatn });
};
