import { Text } from "types";

export const zhRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnIRules + latnRoRules, { source: zhLatn });
};
