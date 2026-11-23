import { Text } from "types";

export const zhEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhEnRules } = await import("data/zh/zh-en.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhEnRules, { source: zhLatn });
};
