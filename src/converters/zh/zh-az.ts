import { Text } from "types";

export const zhAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnAzRules, { source: zhLatn });
};
