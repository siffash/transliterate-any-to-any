import { Text } from "types";

export const zhIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnIsRules, { source: zhLatn });
};
