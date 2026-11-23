import { Text } from "types";

export const zhUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhUkRules } = await import("data/zh/zh-uk.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhUkRules, { source: zhLatn });
};
