import { Text } from "types";

export const zhRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhRuRules } = await import("data/zh/zh-ru.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhRuRules, { source: zhLatn });
};
