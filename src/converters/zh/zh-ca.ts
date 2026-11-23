import { Text } from "types";

export const zhCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnCaRules, { source: zhLatn });
};
