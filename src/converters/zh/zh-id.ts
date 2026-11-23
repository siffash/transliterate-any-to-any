import { Text } from "types";

export const zhId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnIdRules, { source: zhLatn });
};
