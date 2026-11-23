import { Text } from "types";

export const zhMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhMkRules } = await import("data/zh/zh-mk.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhMkRules, { source: zhLatn });
};
