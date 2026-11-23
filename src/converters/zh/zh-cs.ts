import { Text } from "types";

export const zhCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhCsRules } = await import("data/zh/zh-cs.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhCsRules, { source: zhLatn });
};
