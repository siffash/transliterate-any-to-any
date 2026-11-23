import { Text } from "types";

export const zhLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLvRules } = await import("data/zh/zh-lv.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLvRules, { source: zhLatn });
};
