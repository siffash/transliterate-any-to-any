import { Text } from "types";

export const zhHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhHuRules } = await import("data/zh/zh-hu.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhHuRules, { source: words => zhLatn(words, "‧") });
};
