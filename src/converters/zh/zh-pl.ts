import { Text } from "types";

export const zhPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnPlRules, { source: zhLatn });
};
