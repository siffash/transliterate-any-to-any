import { Text } from "types";

export const zhTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnTrRules, { source: zhLatn });
};
