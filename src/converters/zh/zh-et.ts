import { Text } from "types";

export const zhEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnEtRules, { source: zhLatn });
};
