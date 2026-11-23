import { Text } from "types";

export const zhTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhTgRules } = await import("data/zh/zh-tg.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhTgRules, { source: zhLatn });
};
