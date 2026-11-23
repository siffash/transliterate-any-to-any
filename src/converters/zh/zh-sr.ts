import { Text } from "types";

export const zhSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhSrRules } = await import("data/zh/zh-sr.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhSrRules, { source: zhLatn });
};
