import { Text } from "types";

export const zhEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnIRules + latnEsRules, { source: zhLatn });
};
