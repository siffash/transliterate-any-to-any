import { Text } from "types";

export const zhMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnMtRules, { source: zhLatn });
};
