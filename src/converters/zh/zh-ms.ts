import { Text } from "types";

export const zhMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnMsRules, { source: zhLatn });
};
